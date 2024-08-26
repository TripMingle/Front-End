import * as styles from '@/styles/components/common/comment-input.css';
import Profile from './Profile';
import { postBoardComment } from '@/api/postBoard';
import { useEffect, useRef, useState } from 'react';
import { useUserStore } from '@/store/userStore';

const CommentInput = ({
  boardId,
  inputHandler,
  isOpen,
  openModal,
}: {
  boardId: number;
  isOpen: boolean;
  inputHandler: () => void;
  openModal: () => void;
}) => {
  const [content, setContent] = useState<string>('');

  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isLoggedIn) {
      if (inputRef.current) inputRef.current.disabled = true;
      openModal();
    }
  };

  const submitComment = async () => {
    if (content.trim()) {
      await postBoardComment(boardId, content.trim());
      inputHandler();
    }
    setContent('');
  };

  useEffect(() => {
    if (inputRef.current) {
      if (isOpen) inputRef.current.disabled = true;
      else inputRef.current.disabled = false;
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={styles.commentInputProfileContainer}
        onClick={clickHandler}
      >
        <Profile
          url=""
          width={0}
          height={0}
          changeWidth={36}
          changeHeight={36}
        />
        <form className={styles.commentInputContainer} action={submitComment}>
          <input
            className={styles.commentInput}
            ref={inputRef}
            name="content"
            type="text"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={changeHandler}
          />
          <button className={styles.commentInputButton} type="submit">
            등록
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentInput;
