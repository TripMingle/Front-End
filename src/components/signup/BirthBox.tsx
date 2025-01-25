import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import { UserSignupType } from '@/types/country/user';
import { error, inputContent } from '@/styles/signup/page.css';
import '@/styles/write/secondstep/calendar-custom.css';
import { dateString } from '@/utils/client/date';

const BirthBox = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<UserSignupType>();

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const isValid = await trigger('birthDay');
      if (isValid) {
        // setTimeout을 걸지 않으면, focus가 이동될때 name의 마지막 글자가 다음 input에 전달됨
        setTimeout(() => {
          const nextElement = document.querySelector(`[tabindex="5"]`);
          if (nextElement) (nextElement as HTMLElement).focus();
        });
      }
    }
  };

  return (
    <FormField title="생년월일" required={true}>
      <input
        className={inputContent({
          state: !!errors.birthDay ? 'error' : 'default',
        })}
        {...register('birthDay', {
          onChange: (e) => {
            e.target.value = dateString(e.target.value);
          },
          required: '생년월일을 입력해주세요.',
          pattern: {
            value: /^\d{4}-\d{2}-\d{2}$/,
            message: 'YYYY-MM-DD 형식으로 입력해주세요.',
          },
        })}
        onKeyDown={handleKeyDown}
        tabIndex={4}
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
