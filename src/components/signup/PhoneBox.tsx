import { useFormContext } from 'react-hook-form';
import { UserSignupType } from '@/types/country/user';
import { autoHyphen } from '@/utils/client/phone';
import { error, inputContent } from '@/styles/signup/page.css';
import FormField from './FormField';

const PhoneBox = () => {
  const {
    register,
    setFocus,
    trigger,
    formState: { errors },
  } = useFormContext<UserSignupType>();

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      if (event.nativeEvent.isComposing) {
        return;
      }
      event.preventDefault();
      const isValid = await trigger('phoneNumber');
      if (isValid) {
        setFocus('selfIntroduction');
      }
    }
  };

  return (
    <FormField title="전화번호" required={true}>
      <input
        className={inputContent({
          state: !!errors.phoneNumber ? 'error' : 'default',
        })}
        {...register('phoneNumber', {
          onChange: (e) => {
            e.target.value = autoHyphen(e.target.value);
          },
          required: '전화번호를 입력해주세요.',
          pattern: {
            value: /^\d{3}-\d{4}-\d{4}$/,
            message: '올바른 전화번호 형식이 아닙니다.',
          },
        })}
        type="text"
        tabIndex={8}
        maxLength={13}
        placeholder="전화번호를 입력하세요."
        onKeyDown={handleKeyDown}
      />
      {errors?.phoneNumber && (
        <div className={error}>{errors.phoneNumber.message}</div>
      )}
    </FormField>
  );
};

export default PhoneBox;
