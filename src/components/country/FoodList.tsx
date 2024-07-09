import * as styles from '@/styles/country/page.css';
import Good from './Icons/Good';
import More from '../common/More';
import PostCard from '../common/PostCard';

const FoodList = () => {
  return (
    <div className={styles.categoryContainer}>
      <Good className={styles.icon} width={36} height={36} />
      <span className={styles.category}>맛집 추천</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>
          여행객들이 엄선한 맛집! 실패는 NO!
        </span>
        <More path={'/post'} />
      </div>
      <div className={styles.postContainer}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default FoodList;
