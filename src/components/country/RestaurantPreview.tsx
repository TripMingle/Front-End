'use client';
import { useEffect, useState } from 'react';
import * as styles from '@/styles/country/page.css';
import Good from './Icons/Good';
import More from '../common/More';
import PostCard from '../common/PostCard';
import { useCountryStore } from '@/store/countryStore';
import { PostPreviewProps } from '@/types/country/post';
import { getPostPreview } from '@/api/getPost';

const RestaurantPreview = () => {
  const country = useCountryStore((state) => state.country);
  const [restaurantPreview, setRestaurantPreview] = useState<
    PostPreviewProps[]
  >([]);

  const getPreview = async () => {
    if (country) {
      const data = await getPostPreview(country, 'RESTAURANT');
      setRestaurantPreview(data.data);
    }
  };

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
      <div className={styles.postContainer}>
        {restaurantPreview.map((restaurant) => (
          <PostCard props={restaurant} key={restaurant.postingId} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantPreview;
