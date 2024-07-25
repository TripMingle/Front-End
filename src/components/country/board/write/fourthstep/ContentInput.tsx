import * as styles from '@/styles/country/board/write/fourthstep/content-input.css';
import { useRef, useState } from 'react';

const ContentInput = ({ scrollHandler }: { scrollHandler: () => void }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const contentRef = useRef<any>(null);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 30) setTitle(event.target.value);
  };

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (event.target.value.length <= 1000) setContent(event.target.value);
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
            value={title}
            onChange={titleChangeHandler}
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
            value={content}
            rows={10}
            onChange={contentChangeHandler}
            ref={contentRef}
          />
          <span
            className={styles.contentLength}
          >{`${content.length}/1000`}</span>
        </div>
      </div>
    </>
  );
};

export default ContentInput;
