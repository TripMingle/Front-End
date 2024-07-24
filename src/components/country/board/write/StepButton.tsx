import * as styles from '@/styles/country/board/write/step-button.css';

const StepButton = ({
  step,
  country,
  searchCountry,
  stepHandler,
  searchHandler,
  countryHandler,
}: {
  step: number;
  country: string;
  searchCountry: string;
  stepHandler: (step: number) => void;
  searchHandler: (search: string) => void;
  countryHandler: (country: string) => void;
}) => {
  const beforeClickHandler = () => {
    if (step === 1) {
      countryHandler('');
      searchHandler('');
    } else if (step === 2) {
      stepHandler(step - 1);
    }
  };

  const nextClickHandler = () => {
    if (step === 1) {
      if (country !== '') stepHandler(step + 1);
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
        className={styles.nextButton({ select: country !== '' })}
        onClick={nextClickHandler}
      >
        {'다음'}
      </button>
    </div>
  );
};

export default StepButton;
