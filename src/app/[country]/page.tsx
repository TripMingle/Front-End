import * as styles from '@/styles/country/page.css';
import BoardPreview from '@/components/country/BoardPreview';
import CountryBackground from '@/components/country/CountryBackground';
import PostPreview from '@/components/country/PostPreivew';

const Page = () => {
  return (
    <>
      <CountryBackground />
      <div className={styles.contentContainer}>
        <BoardPreview />
        <PostPreview type="restaurant" />
        <PostPreview type="rentalHome" />
        <PostPreview type="schedule" />
      </div>
    </>
  );
};

export default Page;
