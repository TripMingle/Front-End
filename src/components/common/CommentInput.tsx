'use client';
import * as styles from '@/styles/components/common/comment-input.css';
import Profile from './Profile';
import { postBoardComment } from '@/api/board';
import { useEffect, useRef, useState } from 'react';
import { useUserStore } from '@/store/userStore';
import useModal from '@/hooks/useModal';
import { useRouter } from 'next/navigation';
import LoginModal from './LoginModal';

// TODO :: isOpen, openModal
const CommentInput = ({ boardId }: { boardId: number }) => {
  const [content, setContent] = useState<string>('');

  const { isOpen, openModal, closeModal } = useModal();

  const router = useRouter();

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
      router.refresh();
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
      {isLoggedIn ? (
        <></>
      ) : (
        <LoginModal isOpen={isOpen} closeModal={closeModal} />
      )}
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
