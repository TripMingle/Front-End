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
        <More path="/post" />
      </div>
      <div className={styles.postContainer}>
        {/* TODO : country 페이지에서는 샘플 4개씩, 서버에서 4개만 받아서 보여줄 것*/}
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default FoodList;
