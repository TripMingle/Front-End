import { useFormContext } from 'react-hook-form';
import Button1 from '../common/Button1';
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

  const genderClickHandler = (gender: string) => {
    setValue('gender', gender);
  };

  return (
    <FormField title="성별" required={true}>
      <div className={nickNameInputContainer}>
        <Button1
          on={gender == 'male'}
          text={'남성'}
          clickHandler={() => {
            setValue('gender', 'male');
          }}
        />
        <Button1
          on={gender == 'female'}
          text={'여성'}
          clickHandler={() => {
            setValue('gender', 'female');
          }}
        />
      </div>
      {errors.gender && <div className={error}>{errors.gender.message}</div>}
    </FormField>
  );
};

export default GenderBox;
