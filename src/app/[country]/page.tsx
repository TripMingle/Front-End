import '@/styles/font.css';
import Image from 'next/image';
import * as styles from '@/styles/country/page.css';
import { WhiteHeader } from '@/components/header/Header';
import MoveToMain from '@/components/country/MoveToMain';
import BoardList from '@/components/country/BoardList';
import FoodList from '@/components/country/FoodList';
import HomeList from '@/components/country/HomeList';
import ScheduleList from '@/components/country/ScheduleList';
import CountryBackground from '@/components/country/CountryBackground';

const Page = () => {
  return (
    <main>
      <WhiteHeader />
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
          <CountryBackground />
        </div>
        <div className={styles.contentContainer}>
          <MoveToMain />
          <BoardList />
          <FoodList />
          <HomeList />
          <ScheduleList />
        </div>
      </div>
    </main>
  );
};

export default Page;
