import { nextButton } from '@/styles/country/board/write/page.css';

const NextButton = ({
  step,
  country,
  stepHandler,
  searchHandler,
}: {
  step: number;
  country: string;
  stepHandler: (step: number) => void;
  searchHandler: (search: string) => void;
}) => {
  const nextClickHandler = () => {
    if (step === 1) {
      if (country !== '') stepHandler(step + 1);
    }
  };

  return (
    <button
      className={nextButton({ select: country !== '' })}
      onClick={nextClickHandler}
    >
      {'다음'}
    </button>
  );
};

export default NextButton;
