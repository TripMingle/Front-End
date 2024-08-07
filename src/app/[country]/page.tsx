import '@/styles/font.css';
import * as styles from '@/styles/country/page.css';
import { WhiteHeader } from '@/components/header/Header';
import MoveToMain from '@/components/country/MoveToMain';
import BoardPreview from '@/components/country/BoardPreview';
import CountryBackground from '@/components/country/CountryBackground';
import RestaurantPreview from '@/components/country/RestaurantPreview';
import RentalHomePreview from '@/components/country/RentalHomePreview';
import SchedulePreview from '@/components/country/SchedulePreview';

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
          <BoardPreview />
          <RestaurantPreview />
          <RentalHomePreview />
          <SchedulePreview />
        </div>
      </div>
    </main>
  );
};

export default Page;
