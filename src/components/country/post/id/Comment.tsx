import * as styles from '@/styles/components/common/comment.css';
import Profile from '@/components/common/Profile';
import { formatDate } from '@/utils/date';
import { PostCommentType } from '@/types/country/post';

const Comment = ({ props }: { props: PostCommentType }) => {
  return (
    <div className={styles.commentContainer}>
      <Profile
        url={props.userImageUrl}
        width={30}
        height={30}
        changeWidth={36}
        changeHeight={36}
      />
      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
          <span className={styles.name}>{props.userNickname}</span>
          <span className={styles.time}>{formatDate(props.createdAt)}</span>
        </div>
        <p className={styles.content}>{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
