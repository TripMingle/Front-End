'use client';
import { UserSignupType } from '@/types/country/user';
import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import { inputContent } from '@/styles/signup/page.css';
import { useEffect, useState } from 'react';

const NameBox = () => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');
  const { watch, register } = useFormContext<UserSignupType>();
  // 닉네임 특수문자나 다른 공백 확인용
  const regex = /^[가-힣a-zA-Z]+$/;
  const name = watch('name');

  useEffect(() => {
    if (name && !regex.test(name)) {
      setIsAvailable(false);
      setResult('이름이 유효하지 않습니다.');
    } else {
      setResult(''); // 유효한 경우 메시지 초기화
    }
  }, [name]);

  return (
    <FormField title="이름" required={true}>
      <input
        className={inputContent({ select: true })}
        type="text"
        placeholder="이름을 입력하세요."
        tabIndex={1}
        {...register('name', {
          required: true,
          pattern: {
            value: regex,
            message: '올바른 형식이 아닙니다',
          },
        })}
      />
    </FormField>
  );
};

export default NameBox;
