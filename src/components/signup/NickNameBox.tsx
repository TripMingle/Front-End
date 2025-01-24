'use client';
import { UserSignupType } from '@/types/country/user';
import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import {
  error,
  inputContent,
  nickNameButton,
  nickNameInputContainer,
  success,
} from '@/styles/signup/page.css';
import { checkNickName } from '@/api/user';
import { useState } from 'react';

const NickNameBox = () => {
  const {
    register,
    getValues,
    setError,
    formState: { errors },
  } = useFormContext<UserSignupType>();
  // 닉네임 특수문자나 다른 공백 확인용
  const regex = /^[가-힣ㄱ-ㅎa-zA-Z0-9_-]+$/;
  const [successMessage, setSuccessMessage] = useState('');

  const checkRegex = (value: string) => {
    if (!regex.test(value)) {
      return '닉네임은 한글, 영문, 숫자, 밑줄, 하이픈만 사용 가능합니다.';
    }
    return '닉네임 중복 확인이 필요합니다.';
  };

  const checkDuplilcated = async () => {
    // required, regex를 만족해야함.
    const nickName = await getValues('nickName'); // 현재 입력된 nickName 값을 가져옴
    if (!nickName) {
      setError('nickName', { message: '닉네임을 입력하세요.' });
      return;
    }
    if (!regex.test(nickName)) {
      setError('nickName', {
        message: '닉네임은 한글, 영문, 숫자, 밑줄, 하이픈만 사용 가능합니다.',
      });
    }
    const data = await checkNickName(nickName);
    const result = !data.data.duplicationStatus;

    if (result) {
      setSuccessMessage('사용 가능한 닉네임 입니다.');
      // 중복이 없으면 성공 메시지를 표시하고 에러를 지움
      setError('nickName', { message: '' });
    } else {
      // 중복이면 에러 메시지를 설정
      setError('nickName', { message: '이미 사용중인 닉네임 입니다.' });
      setSuccessMessage(''); // 성공 메시지는 지움
    }
  };

  return (
    <FormField title="닉네임" required={true}>
      <div className={nickNameInputContainer}>
        <input
          className={inputContent({
            state: !!errors.nickName ? 'error' : 'default',
          })}
          type="text"
          placeholder="닉네임을 입력하세요."
          tabIndex={2}
          {...register('nickName', {
            required: '닉네임을 입력해주세요.',
            validate: checkRegex,
          })}
        />
        <button
          type="button"
          className={nickNameButton}
          onClick={checkDuplilcated}
          tabIndex={3}
        >
          중복 확인
        </button>
      </div>
      {errors?.nickName && (
        <div className={error}>{errors.nickName.message}</div>
      )}
      {successMessage && <div className={success}>{successMessage}</div>}
    </FormField>
  );
};

export default NickNameBox;
