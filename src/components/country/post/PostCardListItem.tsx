import { PostPreviewProps } from '@/types/country/post';
import Profile from '@/components/common/Profile';
import * as styles from '@/styles/country/post/page.css';
import { usePathname, useRouter } from 'next/navigation';

// postcard와 css가 다름
const PostCardListItem = ({ props }: { props: PostPreviewProps }) => {
  const router = useRouter();
  const pathname = usePathname();

  const clickHandler = async () => {
    router.push(pathname + `/${props.postingId}`);
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

export default PostCardListItem;
