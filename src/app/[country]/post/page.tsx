import * as country from '@/styles/country/page.css';
import CountryBackground from '@/components/country/CountryBackground';
import PostCardList from '@/components/country/post/PostCardList';
import CountryWrite from '@/components/common/CountryWrite';

const Page = async ({
  params,
  searchParams,
}: {
  params: { country: string };
  searchParams: { page: string; category: string };
}) => {
  return (
    <>
      <CountryBackground country={params.country} />
      <div className={country.contentContainer}>
        <PostCardList
          country={params.country}
          page={searchParams.page || '1'}
          category={searchParams.category}
        />
      </div>
      <CountryWrite type="post" />
    </>
  );
};

export default Page;
