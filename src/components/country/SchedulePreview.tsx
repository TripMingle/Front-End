'use client';
import * as styles from '@/styles/country/page.css';
import Calendar from './Icons/Calendar';
import More from '../common/More';
import PostCard from '../common/PostCard';
import { PostPreviewProps } from '@/types/country/post';
import { useEffect, useState } from 'react';
import { useCountryStore } from '@/store/countryStore';
import { getPostPreview } from '@/api/getPost';
import EmptyPost from './EmptyPost';

const SchedulePreview = () => {
  const country = useCountryStore((state) => state.country);
  const [schedulePreview, setSchedulePreview] = useState<PostPreviewProps[]>(
    [],
  );

  const getPreview = async () => {
    if (country) {
      const data = await getPostPreview(country, 'SCHEDULE');
      setSchedulePreview(data.data);
    }
  };

  useEffect(() => {
    getPreview();
  }, [country]);

  return (
    <div className={styles.categoryContainer}>
      <Calendar className={styles.icon} width={36} height={36} />
      <span className={styles.category}>일정 추천</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>
          여행 계획 막막하신가요? 따라만 오세요!
        </span>
        <More path="/post" category="SCHEDULE" />
      </div>
      {schedulePreview.length ? (
        <ul className={styles.postContainer}>
          {schedulePreview.map((schedule) => (
            <li key={schedule.postingId}>
              <PostCard props={schedule} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyPost />
      )}
    </div>
  );
};

export default SchedulePreview;
