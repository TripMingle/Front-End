import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import { container } from '@/styles/signup/page.css';
import { UserSignupType } from '@/types/country/user';

const IntroductionBox = () => {
  const { register } = useFormContext<UserSignupType>();

  return (
    <>
      <FormField title="자기소개" required={false}>
        <input
          className={container({ select: true })}
          type="text"
          placeholder="자기 소개를 입력하세요.(선택 사항)"
          tabIndex={7}
          {...register('selfIntroduction', { required: false })}
        />
      </FormField>
    </>
  );
};

export default IntroductionBox;
