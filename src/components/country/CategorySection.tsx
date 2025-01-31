import * as styles from '@/styles/country/page.css';
import { ReactNode } from 'react';
import Person from './Icons/Person';
import House from './Icons/House';
import Good from './Icons/Good';
import Calendar from './Icons/Calendar';
import More from '../common/More';

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
      {children}
    </div>
  );
};

export default CategorySection;

const categoryInfo: Record<
  string,
  {
    icon: ReactNode;
    title: string;
    explain: string;
    path: string;
  }
> = {
  board: {
    icon: <Person className={styles.icon} width={36} height={36} />,
    title: '여행 동행글',
    explain: '전 세계 친구들과 자유롭게 동행해 보세요!',
    path: '/board',
  },
  rentalHome: {
    title: '숙소 추천',
    explain: '여행에 쌓인 피로도 풀어야죠!',
    icon: <House className={styles.icon} width={36} height={36} />,
    path: '/post?category=rentalHome',
  },
  restaurant: {
    title: '맛집 추천',
    explain: '여행객들이 엄선한 맛집! 실패는 NO!',
    icon: <Good className={styles.icon} width={36} height={36} />,
    path: '/post?category=restaurant',
  },
  schedule: {
    title: '일정 추천',
    explain: '여행 계획 막막하신가요? 따라만 오세요!',
    icon: <Calendar className={styles.icon} width={36} height={36} />,
    path: '/post?category=schedule',
  },
};
