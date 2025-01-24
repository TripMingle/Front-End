'use client';
import { UserSignupType } from '@/types/country/user';
import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import { inputContent } from '@/styles/signup/page.css';

const NameBox = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSignupType>();
  // 닉네임 특수문자나 다른 공백 확인용
  const regex = /^[가-힣a-zA-Z]+$/;

  return (
    <FormField title="이름" required={true}>
      <input
        className={inputContent({ state: !!errors.name ? 'error' : 'default' })}
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
      {errors?.name && <div>{errors.name.message}</div>}
    </FormField>
  );
};

export default NameBox;
