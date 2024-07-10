import * as styles from '@/styles/components/common/comment.css';
import Profile from './Profile';

type Props = {
  url: string;
  name: string;
  time: string;
  content: string;
};

const Comment = (props: Props) => {
  return (
    <div className={styles.commentContainer}>
      <Profile
        url={props.url}
        width={30}
        height={30}
        changeWidth={36}
        changeHeight={36}
      />
      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
          <span className={styles.name}>{props.name}</span>
          <span className={styles.time}>{props.time}</span>
        </div>
        <p className={styles.content}>{props.content}</p>
      </div>
    </div>
  );
};

export default Comment;
