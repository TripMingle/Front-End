import '@/styles/font.css';
import * as styles from '@/styles/country/page.css';
import { WhiteHeader } from '@/components/header/Header';
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
        <CountryBackground />
        <div className={styles.contentContainer}>
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
