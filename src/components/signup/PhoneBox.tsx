import { useFormContext } from 'react-hook-form';
import { UserSignupType } from '@/types/country/user';
import { useEffect } from 'react';
import { autoHyphen } from '@/utils/phone';
import { inputContent } from '@/styles/signup/page.css';
import FormField from './FormField';

const PhoneBox = () => {
  const {
    watch,
    register,
    setValue,
    formState: { errors },
  } = useFormContext<UserSignupType>();
  const phoneNumber = watch('phoneNumber');

  useEffect(() => {
    if (phoneNumber) {
      setValue('phoneNumber', autoHyphen(phoneNumber));
    }
  }, [phoneNumber]);

  return (
    <FormField title="전화번호" required={true}>
      <input
        className={inputContent({ state: !!errors.name ? 'error' : 'default' })}
        {...register('phoneNumber', {
          required: true,
          pattern: {
            value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
            message: '올바른 전화번호 형식이 아닙니다',
          },
        })}
        type="text"
        maxLength={13}
        placeholder="전화번호를 입력하세요"
      />
    </FormField>
  );
};

export default PhoneBox;
