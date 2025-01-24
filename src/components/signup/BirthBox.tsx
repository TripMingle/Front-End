import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import { UserSignupType } from '@/types/country/user';
import { error, inputContent } from '@/styles/signup/page.css';
import '@/styles/write/secondstep/calendar-custom.css';
import { dateString } from '@/utils/date';

const BirthBox = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSignupType>();

  return (
    <FormField title="생년월일" required={true}>
      <input
        className={inputContent({
          state: !!errors.birthDay ? 'error' : 'default',
        })}
        {...register('birthDay', {
          required: '생년월일을 입력해주세요.',
          pattern: {
            value: /^\d{4}-\d{2}-\d{2}$/,
            message: 'YYYY-MM-DD 형식으로 입력해주세요.',
          },
        })}
        onChange={(e) => {
          e.target.value = dateString(e.target.value);
        }}
        type="text"
        maxLength={10}
        placeholder="YYYY-MM-DD"
      />
      {errors?.birthDay && (
        <div className={error}>{errors.birthDay.message}</div>
      )}
    </FormField>
  );
};

export default BirthBox;
