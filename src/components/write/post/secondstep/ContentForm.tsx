import * as styles from '@/styles/write/fourthstep/content-input.css';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { PostForm } from '@/types/country/post';
import PostingTypeInput from './PostingTypeInput';

const ContentForm = ({
  content,
  contentHandler,
  scrollHandler,
}: {
  content: string;
  contentHandler: (content: string) => void;
  scrollHandler: () => void;
}) => {
  const { watch, register } = useFormContext<PostForm>();

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
        <p>카테고리</p>
        <PostingTypeInput />
      </div>
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
            placeholder="Ex) 파리 라뒤레 마카롱 진짜 맛있어요! 베르사유 궁전에도 파는 곳이 있답니다 :)"
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
