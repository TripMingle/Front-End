'use client';
import { useEffect, useState } from 'react';
import * as styles from '@/styles/country/page.css';
import Good from './Icons/Good';
import More from '../common/More';
import PostCard from '../common/PostCard';
import { PostPreviewProps } from '@/types/country/post';
import { getPostPreview } from '@/api/getPost';
import EmptyPost from './EmptyPost';
import { usePathname } from 'next/navigation';
import { getCountryName } from '@/utils/country';

const RestaurantPreview = () => {
  const pathname = usePathname();
  const [country, setCountry] = useState<string>('');
  const [restaurantPreview, setRestaurantPreview] = useState<
    PostPreviewProps[]
  >([]);

  const getPreview = async () => {
    if (country) {
      const data = await getPostPreview(country, 'RESTAURANT');
      console.log(data);
      setRestaurantPreview(data.data);
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
      <Good className={styles.icon} width={36} height={36} />
      <span className={styles.category}>맛집 추천</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>
          여행객들이 엄선한 맛집! 실패는 NO!
        </span>
        <More path="/post" category="RESTAURANT" />
      </div>
      {restaurantPreview.length ? (
        <ul className={styles.postContainer}>
          {restaurantPreview.map((restaurant) => (
            <li key={restaurant.postingId}>
              <PostCard props={restaurant} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyPost />
      )}
    </div>
  );
};

export default RestaurantPreview;
