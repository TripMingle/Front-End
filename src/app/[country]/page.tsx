import '@/styles/font.css';
import * as styles from '@/styles/country/page.css';
import Header from '@/components/header/Header';
import BoardPreview from '@/components/country/BoardPreview';
import CountryBackground from '@/components/country/CountryBackground';
import PostPreview from '@/components/country/PostPreivew';

const Page = () => {
  return (
    <main>
      <Header />
      <div className={styles.pageContainer}>
        <CountryBackground />
        <div className={styles.contentContainer}>
          <BoardPreview />
          <PostPreview type="restaurant" />
          <PostPreview type="rentalHome" />
          <PostPreview type="schedule" />
        </div>
      </div>
    </main>
  );
};

export default Page;
