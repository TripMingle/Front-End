import { postBoard } from '@/api/board';
import { postPost } from '@/api/post';
import * as styles from '@/styles/write/step-button.css';
import { BoardForm, BoardScheduleType } from '@/types/country/board';
import { SchedulePlaceType } from '@/types/country/place';
import { PostForm } from '@/types/country/post';
import { getDateInRange } from '@/utils/client/date';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const StepButton = ({
  step,
  content,
  searchCountry,
  stepHandler,
  searchHandler,
  contentHandler,
}: {
  step: number;
  content: string;
  searchCountry: string;
  stepHandler: (step: number) => void;
  searchHandler: (search: string) => void;
  contentHandler: (content: string) => void;
}) => {
  const { watch, setValue, handleSubmit } = useFormContext<PostForm>();
  const country = watch('country');
  const title = watch('title');
  const postingType = watch('postingType');

  const router = useRouter();

  // 다음으로 갈 수 있는지 확인
  const [isSubmit, setIsSubmit] = useState<boolean>(true);

  const checkValue = () => {
    if (step === 1) {
      if (country) return true;
      return false;
    } else if (step === 2) {
      if (isSubmit && title && content && postingType) return true;
      return false;
    }
  };

  // TODO :: 정보글 보기 페이지 만들면, 이동하는 걸로 수정해야함!
  const submit = async (data: PostForm) => {
    console.log(data);
    const response = await postPost(data);
    console.log(response.data);
    if (response.data)
      router.push(`/${response.data.country}/post/${response.data.postingId}`);
    setIsSubmit(true);
  };

  const beforeClickHandler = () => {
    if (step === 1) {
      setValue('country', '');
      searchHandler('');
    } else {
      stepHandler(step - 1);
      setValue('title', '');
      setValue('content', '');
      setValue('postingType', '');
      contentHandler('');
    }
  };

  const nextClickHandler = () => {
    if (step === 2) {
      if (isSubmit && content) {
        setIsSubmit(false);
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
        {step < 2 ? '다음' : isSubmit ? '게시' : '게시중...'}
      </button>
    </div>
  );
};

export default StepButton;
