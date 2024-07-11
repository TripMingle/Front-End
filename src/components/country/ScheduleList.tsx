import * as styles from '@/styles/country/page.css';
import Calendar from './Icons/Calendar';
import More from '../common/More';
import PostCard from '../common/PostCard';

const ScheduleList = () => {
  return (
    <div className={styles.categoryContainer}>
      <Calendar className={styles.icon} width={36} height={36} />
      <span className={styles.category}>일정 추천</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>
          여행 계획 막막하신가요? 따라만 오세요!
        </span>
        <More path="/post" />
      </div>
      <div className={styles.postContainer}>
        {/*country 페이지에서는 샘플 4개씩, 서버에서 4개만 받아서 보여줄 것*/}
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default ScheduleList;
