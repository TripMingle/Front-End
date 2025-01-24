'use client';
import { UserSignupType } from '@/types/country/user';
import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import { inputContent, nickNameButton } from '@/styles/signup/page.css';
import { checkNickName } from '@/api/user';
import { useEffect, useState } from 'react';

const NickNameBox = () => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<UserSignupType>();
  // 닉네임 특수문자나 다른 공백 확인용
  const regex = /^[가-힣ㄱ-ㅎa-zA-Z0-9_-]+$/;
  const nickName = watch('nickName');

  useEffect(() => {
    if (nickName && !regex.test(nickName)) {
      setIsAvailable(false);
      setResult('닉네임은 한글, 영문, 숫자, 밑줄, 하이픈만 사용 가능합니다.');
    } else {
      setResult(''); // 유효한 경우 메시지 초기화
    }
  }, [nickName]);

  const checkDuplilcated = async () => {
    if (!regex.test(nickName)) return;
    const data = await checkNickName(nickName);
    const result = !data.data.duplicationStatus;
    setIsAvailable(result);
    setResult(
      result ? '사용 가능한 닉네임입니다.' : '이미 사용 중인 닉네임입니다.',
    );
  };

  return (
    <FormField title="닉네임" required={true}>
      <input
        className={inputContent({ state: !!errors.name ? 'error' : 'default' })}
        type="text"
        placeholder="닉네임을 입력하세요."
        tabIndex={2}
        {...register('nickName', {
          required: true,
          pattern: {
            value: regex,
            message:
              '닉네임은 한글, 영문, 숫자, 밑줄, 하이픈만 사용 가능합니다',
          },
        })}
      />
      <button
        className={nickNameButton}
        onClick={checkDuplilcated}
        disabled={!nickName || !regex.test(nickName)}
        tabIndex={3}
      >
        중복 확인
      </button>
    </FormField>
  );
};

export default NickNameBox;
