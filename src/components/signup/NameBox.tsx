'use client';
import { UserSignupType } from '@/types/country/user';
import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import { error, inputContent } from '@/styles/signup/page.css';

const NameBox = () => {
  const {
    register,
    trigger,
    setFocus,
    formState: { errors },
  } = useFormContext<UserSignupType>();
  // 닉네임 특수문자나 다른 공백 확인용
  const regex = /^[가-힣a-zA-Z]+$/;

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      // 설정안하면 event가 두번 작동하게 됨.
      if (event.nativeEvent.isComposing) {
        return;
      }
      event.preventDefault();
      const isValid = await trigger('name');
      if (isValid) {
        setFocus('nickName');
      }
    }
  };

  return (
    <FormField title="이름" required={true}>
      <input
        className={inputContent({ state: !!errors.name ? 'error' : 'default' })}
        type="text"
        placeholder="이름을 입력하세요."
        tabIndex={1}
        {...register('name', {
          required: '이름을 입력해주세요.',
          pattern: {
            value: regex,
            message: '올바른 형식이 아닙니다.',
          },
        })}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      {errors?.name && <div className={error}>{errors.name.message}</div>}
    </FormField>
  );
};

export default NameBox;
