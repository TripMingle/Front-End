import * as country from '@/styles/country/page.css';
import CountryBackground from '@/components/country/CountryBackground';
import PostCardList from '@/components/country/post/PostCardList';
import CountryWrite from '@/components/common/CountryWrite';

const Page = ({ params }: { params: { country: string } }) => {
  return (
    <>
      <CountryBackground country={params.country} />
      <div className={country.contentContainer}>
        <PostCardList />
      </div>
      <CountryWrite type="post" />
    </>
  );
};

export default Page;
