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
    clearErrors,
    setFocus,
    formState: { errors },
  } = useFormContext<UserSignupType>();
  // 닉네임 특수문자나 다른 공백 확인용
  const regex = /^[가-힣ㄱ-ㅎa-zA-Z0-9_-]+$/;
  const [checked, setChecked] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const checkRegexDupliacted = (value: string) => {
    if (!regex.test(value)) {
      return '닉네임은 한글, 영문, 숫자, 밑줄, 하이픈만 사용 가능합니다.';
    } else if (!checked) {
      return '닉네임 중복 확인이 필요합니다.';
    }
    return true;
  };

  const checkDuplicated = async () => {
    const nickName = getValues('nickName');
    // 혹시나 아무것도 입력안하고 '중복확인'버튼을 누르는 경우를 대비하여
    // required, regex를 먼저 만족해야함
    if (!nickName) {
      setError('nickName', { message: '닉네임을 입력하세요.' });
      return;
    }

    if (!regex.test(nickName)) {
      setError('nickName', {
        message: '닉네임은 한글, 영문, 숫자, 밑줄, 하이픈만 사용 가능합니다.',
      });
      return;
    }

    const data = await checkNickName(nickName);
    const result = !data.data.duplicationStatus;

    if (result) {
      clearErrors('nickName');
      setSuccessMessage('사용 가능한 닉네임 입니다.');
      // 중복이 없으면 성공 메시지를 표시하고 에러를 지움
      setChecked(true);
      setFocus('birthDay');
    } else {
      // 중복이면 에러 메시지를 설정
      setError('nickName', { message: '이미 사용중인 닉네임 입니다.' });
      setSuccessMessage(''); // 성공 메시지는 지움
      setChecked(false);
    }
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      if (event.nativeEvent.isComposing) {
        return;
      }
      setSuccessMessage('');
      event.preventDefault();

      const nickName = getValues('nickName');

      const isValid = nickName && regex.test(nickName);

      if (isValid) {
        const nextElement = document.querySelector(`[tabindex="3"]`);
        if (nextElement) (nextElement as HTMLElement).focus();
      }
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
          onKeyDown={handleKeyDown}
          {...register('nickName', {
            onChange: () => {
              setSuccessMessage('');
              setChecked(false);
            },
            required: '닉네임을 입력해주세요.',
            validate: checkRegexDupliacted,
          })}
        />
        <button
          type="button"
          className={nickNameButton}
          onClick={checkDuplicated}
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
