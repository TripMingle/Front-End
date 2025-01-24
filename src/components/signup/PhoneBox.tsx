import { useFormContext } from 'react-hook-form';
import { UserSignupType } from '@/types/country/user';
import { autoHyphen } from '@/utils/phone';
import { error, inputContent } from '@/styles/signup/page.css';
import FormField from './FormField';

const PhoneBox = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSignupType>();

  return (
    <FormField title="전화번호" required={true}>
      <input
        className={inputContent({
          state: !!errors.phoneNumber ? 'error' : 'default',
        })}
        {...register('phoneNumber', {
          required: '전화번호를 입력해주세요.',
          pattern: {
            value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
            message: '올바른 전화번호 형식이 아닙니다.',
          },
        })}
        onChange={(e) => {
          e.target.value = autoHyphen(e.target.value);
        }}
        type="text"
        maxLength={13}
        placeholder="전화번호를 입력하세요."
      />
      {errors?.phoneNumber && (
        <div className={error}>{errors.phoneNumber.message}</div>
      )}
    </FormField>
  );
};

export default PhoneBox;
