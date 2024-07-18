'use client';
import * as styles from '@/styles/country/page.css';
import House from './Icons/House';
import More from '../common/More';
import PostCard from '../common/PostCard';
import { useCountryStore } from '@/store/countryStore';
import { PostPreviewProps } from '@/types/country/post';
import { useEffect, useState } from 'react';
import { getPostPreview } from '@/api/getPost';

const RentalHomePreview = () => {
  const country = useCountryStore((state) => state.country);
  const [rentalHomePreview, setRentalHomePreview] = useState<
    PostPreviewProps[]
  >([]);

  const getPreview = async () => {
    if (country) {
      const data = await getPostPreview(country, 'RENTAL_HOME');
      setRentalHomePreview(data.data);
    }
  };

  useEffect(() => {
    getPreview();
  }, [country]);

  return (
    <div className={styles.categoryContainer}>
      <House className={styles.icon} width={36} height={36} />
      <span className={styles.category}>숙소 추천</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>여행에 쌓인 피로도 풀어야죠!</span>
        <More path="/post" category="RENTAL_HOME" />
      </div>
      <div className={styles.postContainer}>
        {rentalHomePreview.map((rentalHome) => (
          <PostCard props={rentalHome} key={rentalHome.postingId} />
        ))}
      </div>
    </div>
  );
};

export default RentalHomePreview;
