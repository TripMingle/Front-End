import Profile from './Profile';
import * as styles from '@/styles/components/common/post-item.css';

const PostCard = () => {
  return (
    <div className={styles.postCard}>
      <span className={styles.title}>분식을 품다 강남본점</span>
      <span className={styles.content}>
        분식을 품다는 당일 조리, 매장 청결을 최우선으로 하여 좋은 식자재로
        건강어쩌구
      </span>
      <div className={styles.profileContainer}>
        <Profile url={''} width={24} height={24} />
        <span className={styles.profileInfo}>
          {'홍길동'} · {30}대 · {'여'} · {'중국'}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
