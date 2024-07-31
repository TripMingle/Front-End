import * as styles from '@/styles/components/common/comment-input.css';
import Profile from './Profile';
import { postBoardComment } from '@/api/postBoard';
import { useState } from 'react';

const CommentInput = ({
  boardId,
  inputHandler,
}: {
  boardId: number;
  inputHandler: () => void;
}) => {
  const [content, setContent] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const submitComment = async () => {
    if (content.trim()) {
      await postBoardComment(boardId, content.trim());
      inputHandler();
    }
    setContent('');
  };

  return (
    <div className={styles.commentInputProfileContainer}>
      <Profile url="" width={0} height={0} changeWidth={36} changeHeight={36} />
      <form className={styles.commentInputContainer} action={submitComment}>
        <input
          className={styles.commentInput}
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
  );
};

export default CommentInput;
