import * as styles from '@/styles/components/common/comment.css';
import Profile from './Profile';
import { CommentType } from '@/types/country/board';
import { formatDate } from '@/utils/date';

const Comment = ({ props }: { props: CommentType }) => {
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
          <span className={styles.time}>
            {formatDate(props.registeredDate)}
          </span>
        </div>
        <p className={styles.content}>{props.content}</p>
      </div>
    </div>
  );
};

export default Comment;
