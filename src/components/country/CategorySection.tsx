import * as styles from '@/styles/country/page.css';
import { ReactNode, Suspense } from 'react';
import Person from './Icons/Person';
import House from './Icons/House';
import Good from './Icons/Good';
import Calendar from './Icons/Calendar';
import More from '../common/More';
import BoardPreviewSkeleton from './BoardPreviewSkeleton';
import PostPreviewSkeleton from './PostPreviewSkeleton';

type CategoryProps = {
  category: string;
  children: ReactNode;
};

const CategorySection = async ({ category, children }: CategoryProps) => {
  return (
    <div className={styles.categoryContainer}>
      {categoryInfo[category].icon}
      <span className={styles.category}>{categoryInfo[category].title}</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>{categoryInfo[category].explain}</span>
        <More path={categoryInfo[category].path} />
      </div>
      <Suspense fallback={categoryInfo[category].skeleton}>{children}</Suspense>
    </div>
  );
};

export default CategorySection;

const categoryInfo: Record<
  string,
  {
    icon: ReactNode;
    skeleton: ReactNode;
    title: string;
    explain: string;
    path: string;
  }
> = {
  board: {
    icon: <Person className={styles.icon} width={36} height={36} />,
    skeleton: <BoardPreviewSkeleton />,
    title: '여행 동행글',
    explain: '전 세계 친구들과 자유롭게 동행해 보세요!',
    path: '/board',
  },
  rentalHome: {
    icon: <House className={styles.icon} width={36} height={36} />,
    skeleton: <PostPreviewSkeleton />,
    title: '숙소 추천',
    explain: '여행에 쌓인 피로도 풀어야죠!',
    path: '/post?category=rentalHome',
  },
  restaurant: {
    icon: <Good className={styles.icon} width={36} height={36} />,
    skeleton: <PostPreviewSkeleton />,
    title: '맛집 추천',
    explain: '여행객들이 엄선한 맛집! 실패는 NO!',
    path: '/post?category=restaurant',
  },
  schedule: {
    icon: <Calendar className={styles.icon} width={36} height={36} />,
    skeleton: <PostPreviewSkeleton />,
    title: '일정 추천',
    explain: '여행 계획 막막하신가요? 따라만 오세요!',
    path: '/post?category=schedule',
  },
};
