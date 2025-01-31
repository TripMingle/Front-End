import * as styles from '@/styles/country/page.css';
import BoardPreview from '@/components/country/BoardPreview';
import CountryBackground from '@/components/country/CountryBackground';
import PostPreview from '@/components/country/PostPreivew';
import { Suspense } from 'react';
import BoardPreviewSkeleton from '@/components/country/BoardPreviewSkeleton';
import PostPreviewSkeleton from '@/components/country/PostPreviewSkeleton';
import CategorySection from '@/components/country/CategorySection';

const Page = async ({ params }: { params: { country: string } }) => {
  return (
    <>
      <CountryBackground country={params.country} />
      <div className={styles.contentContainer}>
        <CategorySection category="board">
          <Suspense fallback={<BoardPreviewSkeleton />}>
            <BoardPreview country={params.country} />
          </Suspense>
        </CategorySection>
        <CategorySection category="restaurant">
          <Suspense fallback={<PostPreviewSkeleton />}>
            <PostPreview country={params.country} category="restaurant" />
          </Suspense>
        </CategorySection>
        <CategorySection category="rentalHome">
          <Suspense fallback={<PostPreviewSkeleton />}>
            <PostPreview country={params.country} category="rentalHome" />
          </Suspense>
        </CategorySection>
        <CategorySection category="schedule">
          <Suspense fallback={<PostPreviewSkeleton />}>
            <PostPreview country={params.country} category="schedule" />
          </Suspense>
        </CategorySection>
      </div>
    </>
  );
};

export default Page;
