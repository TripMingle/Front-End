'use client';
import { UserSignupType } from '@/types/country/user';
import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import {
  container,
  nickNameButton,
  nickNamefieldContainer,
  nickNameResult,
} from '@/styles/signup/page.css';
import { checkNickName } from '@/api/user';
import { useEffect, useState } from 'react';

const NickNameBox = () => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');
  const { watch, register } = useFormContext<UserSignupType>();
  // 닉네임 특수문자나 다른 공백 확인용
  const regex = /^[가-힣ㄱ-ㅎa-zA-Z0-9_-]+$/;
  const nickName = watch('nickName');

  useEffect(() => {
    if (nickName && !regex.test(nickName)) {
      setIsAvailable(false);
      setResult(
        '닉네임이 유효하지 않습니다. 닉네임은 영문자, 숫자, 밑줄 및 하이픈만 포함할 수 있으며 공백이나 특수 문자를 포함할 수 없습니다',
      );
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
    <div className={nickNamefieldContainer}>
      <FormField title="닉네임" required={true}>
        <input
          className={container({ select: true })}
          type="text"
          placeholder="닉네임을 입력하세요."
          tabIndex={2}
          {...register('nickName', { required: true })}
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
      <span className={nickNameResult({ result: isAvailable })}>{result}</span>
    </div>
  );
};

export default NickNameBox;
