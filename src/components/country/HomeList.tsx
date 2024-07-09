import * as styles from '@/styles/country/page.css';
import House from './Icons/House';
import More from '../common/More';
import PostCard from '../common/PostCard';

const HomeList = () => {
  return (
    <div className={styles.categoryContainer}>
      <House className={styles.icon} width={36} height={36} />
      <span className={styles.category}>숙소 추천</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>여행에 쌓인 피로도 풀어야죠!</span>{' '}
        <More path={'/post'} />
      </div>
      <div className={styles.postContainer}>
        <PostCard /> <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default HomeList;
