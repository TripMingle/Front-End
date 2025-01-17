import Profile from '../common/Profile';
import * as styles from '@/styles/country/post-preview-item.css';
import { PostPreviewProps } from '@/types/country/post';
import { usePathname, useRouter } from 'next/navigation';

const PostPreviewItem = ({ props }: { props: PostPreviewProps }) => {
  const router = useRouter();
  const pathname = usePathname();

  const clickHandler = async () => {
    router.push(pathname + `/post/${props.postingId}`);
  };

  return (
    <div className={styles.postCard} onClick={clickHandler}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.content}>{props.content}</span>
      <div className={styles.profileContainer}>
        <Profile
          url={props.userImageUrl}
          width={18}
          height={18}
          changeWidth={24}
          changeHeight={24}
        />
        <span className={styles.profileInfo}>
          {`${props.userNickName} · ${props.userAgeRange.slice(0, 2)}대 · 
          ${props.userGender === 'male' ? '남' : '여'} · ${props.userNationality}`}
        </span>
      </div>
    </div>
  );
};

export default PostPreviewItem;
