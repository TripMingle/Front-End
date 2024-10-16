'use client';
import * as styles from '@/styles/country/page.css';
import House from './Icons/House';
import More from '../common/More';
import PostCard from '../common/PostCard';
import { PostPreviewProps } from '@/types/country/post';
import { useEffect, useState } from 'react';
import { getPostPreview } from '@/api/post';
import EmptyPost from './EmptyPost';
import { usePathname } from 'next/navigation';
import { getCountryName } from '@/utils/country';

const RentalHomePreview = () => {
  const pathname = usePathname();
  const [country, setCountry] = useState<string>('');
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
    setCountry(getCountryName(pathname));
  }, []);

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
      {rentalHomePreview.length ? (
        <ul className={styles.postContainer}>
          {rentalHomePreview.map((rentalHome) => (
            <li key={rentalHome.postingId}>
              <PostCard props={rentalHome} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyPost />
      )}
    </div>
  );
};

export default RentalHomePreview;
