import * as styles from '@/styles/country/page.css';
import BoardPreview from '@/components/country/BoardPreview';
import CountryBackground from '@/components/country/CountryBackground';
import PostPreview from '@/components/country/PostPreivew';
import CategorySection from '@/components/country/CategorySection';

const Page = async ({ params }: { params: { country: string } }) => {
  return (
    <>
      <CountryBackground country={params.country} />
      <div className={styles.contentContainer}>
        <CategorySection category="board">
          <BoardPreview country={params.country} />
        </CategorySection>
        <CategorySection category="restaurant">
          <PostPreview country={params.country} category="restaurant" />
        </CategorySection>
        <CategorySection category="rentalHome">
          <PostPreview country={params.country} category="rentalHome" />
        </CategorySection>
        <CategorySection category="schedule">
          <PostPreview country={params.country} category="schedule" />
        </CategorySection>
      </div>
    </>
  );
};

export default Page;
