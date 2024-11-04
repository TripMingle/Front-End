'use client';
import * as styles from '@/styles/country/page.css';
import House from './Icons/House';
import More from '../common/More';
import PostPreviewItem from './PostPreviewItem';
import { PostPreviewProps } from '@/types/country/post';
import { useEffect, useState } from 'react';
import { getPostPreview } from '@/api/post';
import EmptyPost from './EmptyPost';
import { usePathname } from 'next/navigation';
import { getCountryName } from '@/utils/country';
import Calendar from './Icons/Calendar';
import Good from './Icons/Good';

type postType = {
  title: string;
  explain: string;
  icon: React.ReactNode;
  cateogry: 'RENTAL_HOME' | 'RESTAURANT' | 'SCHEDULE';
};

const post: Record<'rentalHome' | 'restaurant' | 'schedule', postType> = {
  rentalHome: {
    title: '숙소 추천',
    explain: '여행에 쌓인 피로도 풀어야죠!',
    icon: <House className={styles.icon} width={36} height={36} />,
    cateogry: 'RENTAL_HOME',
  },
  restaurant: {
    title: '맛집 추천',
    explain: '여행객들이 엄선한 맛집! 실패는 NO!',
    icon: <Good className={styles.icon} width={36} height={36} />,
    cateogry: 'RESTAURANT',
  },
  schedule: {
    title: '일정 추천',
    explain: '여행 계획 막막하신가요? 따라만 오세요!',
    icon: <Calendar className={styles.icon} width={36} height={36} />,
    cateogry: 'SCHEDULE',
  },
};

const PostPreview = ({
  type,
}: {
  type: 'rentalHome' | 'restaurant' | 'schedule';
}) => {
  const pathname = usePathname();
  const [country, setCountry] = useState<string>('');
  const [postPreview, setPostPreview] = useState<PostPreviewProps[]>([]);

  const getPreview = async () => {
    if (country) {
      const data = await getPostPreview(country, post[type].cateogry);
      setPostPreview(data.data);
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
      {post[type].icon}
      <span className={styles.category}>{post[type].title}</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>{post[type].explain}</span>
        <More path="/post" category={post[type].cateogry} />
      </div>
      {postPreview.length ? (
        <ul className={styles.postContainer}>
          {postPreview.map((post) => (
            <li key={post.postingId}>
              <PostPreviewItem props={post} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyPost />
      )}
    </div>
  );
};

export default PostPreview;
