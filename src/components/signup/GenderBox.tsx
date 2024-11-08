import { useFormContext } from 'react-hook-form';
import Button1 from '../common/Button1';
import FormField from './FormField';
import { UserSignupType } from '@/types/country/user';

const GenderBox = () => {
  const { watch, setValue } = useFormContext<UserSignupType>();
  const gender = watch('gender');
  const genderClickHandler = (gender: string) => {
    setValue('gender', gender);
  };
  return (
    <FormField title="성별" required={true}>
      <Button1
        on={gender == 'female'}
        text={'여성'}
        clickHandler={() => {
          genderClickHandler('female');
        }}
      />
      <Button1
        on={gender == 'male'}
        text={'남성'}
        clickHandler={() => {
          genderClickHandler('male');
        }}
      />
    </FormField>
  );
};

export default GenderBox;
