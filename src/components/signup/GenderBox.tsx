import { useFormContext } from 'react-hook-form';
import Button from '../common/Button';
import FormField from './FormField';
import { UserSignupType } from '@/types/country/user';
import { error, nickNameInputContainer } from '@/styles/signup/page.css';

const GenderBox = () => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<UserSignupType>();

  const gender = watch('gender');

  return (
    <FormField title="성별" required={true}>
      <div className={nickNameInputContainer}>
        <Button
          on={gender == 'male'}
          type="button"
          tabIndex={5}
          onClick={() => {
            setValue('gender', 'male', { shouldValidate: true });
          }}
        >
          남성
        </Button>
        <Button
          on={gender == 'female'}
          type="button"
          tabIndex={6}
          onClick={() => {
            setValue('gender', 'female', { shouldValidate: true });
          }}
        >
          여성
        </Button>
      </div>
      {errors.gender && <div className={error}>{errors.gender.message}</div>}
    </FormField>
  );
};

export default GenderBox;
