import * as styles from '@/styles/components/common/comment-input.css';
import Profile from './Profile';

const CommentInput = () => {
  return (
    <div className={styles.commentInputProfileContainer}>
      <Profile url="" width={0} height={0} changeWidth={36} changeHeight={36} />
      <form className={styles.commentInputContainer}>
        <input
          className={styles.commentInput}
          type="text"
          placeholder="내용을 입력하세요."
        />
        <button className={styles.commentInputButton}>등록</button>
      </form>
    </div>
  );
};

export default CommentInput;
