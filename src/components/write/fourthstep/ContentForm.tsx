import * as styles from '@/styles/write/fourthstep/content-input.css';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';

const ContentForm = ({
  content,
  contentHandler,
  scrollHandler,
}: {
  content: string;
  contentHandler: (content: string) => void;
  scrollHandler: () => void;
}) => {
  const { watch, register } = useFormContext<BoardForm>();

  const title = watch('title');

  const contentRef = useRef<any>(null);

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    contentHandler(event.target.value);

    if (contentRef.current) {
      contentRef.current.style.height = `auto`;
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      scrollHandler();
    }
  };

  return (
    <>
      <div className={styles.fieldContainer}>
        <p>제목</p>
        <div className={styles.container}>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="제목을 입력하세요."
            {...register('title', { required: true, maxLength: 30 })}
            maxLength={30}
          />
          <span>{`${title.length}/30`}</span>
        </div>
      </div>
      <div className={styles.fieldContainer}>
        <p>내용</p>
        <div className={styles.container}>
          <textarea
            className={styles.contentInput}
            placeholder="Ex) 파리 에펠탑에서 7시에 피크닉할 분 구해요!"
            {...register('content', { maxLength: 1000 })}
            value={content}
            onChange={contentChangeHandler}
            ref={contentRef}
            maxLength={1000}
            rows={10}
          />
          <span
            className={styles.contentLength}
          >{`${content.length}/1000`}</span>
        </div>
      </div>
    </>
  );
};

export default ContentForm;
