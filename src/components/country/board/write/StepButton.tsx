import { postBoard } from '@/api/postBoard';
import * as styles from '@/styles/country/board/write/step-button.css';
import { BoardForm } from '@/types/country/board';
import { useFormContext } from 'react-hook-form';

const StepButton = ({
  step,
  content,
  searchCountry,
  stepHandler,
  searchHandler,
}: {
  step: number;
  content: string;
  searchCountry: string;
  stepHandler: (step: number) => void;
  searchHandler: (search: string) => void;
}) => {
  const { watch, setValue, handleSubmit } = useFormContext<BoardForm>();
  const country = watch('countryName');
  const endDate = watch('endDate');
  const language = watch('language');
  const maxCount = watch('maxCount');
  const title = watch('title');

  const checkValue = () => {
    if (step === 1) {
      if (country) return true;
      return false;
    } else if (step === 2) {
      if (endDate && language && maxCount > 0) return true;
      return false;
    } else if (step === 3) {
      return true;
    } else {
      if (title && content) return true;
      return false;
    }
  };

  const submit = async (data: BoardForm) => {
    console.log(data);
    const response = await postBoard(data);
    console.log(response);
  };

  const beforeClickHandler = () => {
    if (step === 1) {
      setValue('countryName', '');
      searchHandler('');
    } else {
      stepHandler(step - 1);
    }
  };

  const nextClickHandler = () => {
    if (step === 4) {
      if (content) {
        setValue('content', content);
        handleSubmit(submit)();
      }
    } else {
      if (checkValue()) stepHandler(step + 1);
    }
  };

  return (
    <div className={styles.buttonContainer}>
      {searchCountry ? (
        <button className={styles.beforeButton} onClick={beforeClickHandler}>
          {'이전'}
        </button>
      ) : (
        <></>
      )}
      <button
        className={styles.nextButton({ select: checkValue() })}
        onClick={nextClickHandler}
      >
        {step < 4 ? '다음' : '게시'}
      </button>
    </div>
  );
};

export default StepButton;
