import { postBoard } from '@/api/board';
import * as styles from '@/styles/write/step-button.css';
import { BoardForm, BoardScheduleType } from '@/types/country/board';
import { SchedulePlaceType } from '@/types/country/place';
import { getDateInRange } from '@/utils/date';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const StepButton = ({
  step,
  content,
  searchCountry,
  placeList,
  stepHandler,
  searchHandler,
}: {
  step: number;
  content: string;
  searchCountry: string;
  placeList: {
    [key: string]: SchedulePlaceType[];
  };
  stepHandler: (step: number) => void;
  searchHandler: (search: string) => void;
}) => {
  const { watch, setValue, handleSubmit } = useFormContext<BoardForm>();
  const country = watch('countryName');
  const startDate = watch('startDate');
  const endDate = watch('endDate');
  const language = watch('language');
  const maxCount = watch('maxCount');
  const title = watch('title');

  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState<boolean>(true);

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
      if (isSubmit && title && content) return true;
      return false;
    }
  };

  const scheduleHandler = () => {
    const dateArray = getDateInRange(startDate, endDate);
    const boardScheduleArray: BoardScheduleType[] = [];
    dateArray.forEach((date) => {
      placeList[date].forEach((place, index) => {
        boardScheduleArray.push({
          date: date,
          placeName: place.placeName,
          number: index,
          pointX: place.pointX,
          pointY: place.pointY,
          googlePlaceId: place.googlePlaceId,
        });
      });
    });
    setValue('createBoardSchedule', boardScheduleArray);
  };

  const submit = async (data: BoardForm) => {
    console.log(data);
    const response = await postBoard(data);
    console.log(response.data);
    if (response.data)
      router.push(
        `/${response.data.countryName}/board/${response.data.boardId}`,
      );
    setIsSubmit(true);
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
      if (isSubmit && content) {
        setIsSubmit(false);
        setValue('content', content);
        scheduleHandler();
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
        {step < 4 ? '다음' : isSubmit ? '게시' : '게시중...'}
      </button>
    </div>
  );
};

export default StepButton;
