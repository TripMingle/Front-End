import Link from 'next/link';
import Profile from '@/components/common/Profile';
import * as styles from '@/styles/country/post-preview-item.css';
import { PostPreviewProps } from '@/types/country/post';

const PostPreviewItem = async ({
  country,
  props,
}: {
  country: string;
  props: PostPreviewProps;
}) => {
  return (
    <Link href={`/${country}/post/${props.postingId}`}>
      <div className={styles.postCard}>
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
    </Link>
  );
};

export default PostPreviewItem;
