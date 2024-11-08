import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import { UserSignupType } from '@/types/country/user';
import { useEffect } from 'react';
import { autoHyphen } from '@/utils/phone';
import { container } from '@/styles/signup/page.css';

const PhoneBox = () => {
  const { watch, register, setValue } = useFormContext<UserSignupType>();
  const phoneNumber = watch('phoneNumber');

  useEffect(() => {
    if (phoneNumber) {
      setValue('phoneNumber', autoHyphen(phoneNumber));
    }
  }, [phoneNumber]);

  return (
    <FormField title="전화번호" required={true}>
      <input
        className={container({ select: true })}
        {...register('phoneNumber')}
        type="text"
        maxLength={13}
        placeholder="전화번호를 입력하세요"
      />
    </FormField>
  );
};

export default PhoneBox;
