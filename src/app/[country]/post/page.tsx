import Image from 'next/image';
import '@/styles/font.css';
import * as country from '@/styles/country/page.css';
import Header from '@/components/header/Header';
import CountryBackground from '@/components/country/CountryBackground';
import PostCardList from '@/components/country/post/PostCardList';
import CountryWrite from '@/components/common/CountryWrite';

const Page = () => {
  return (
    <main>
      <Header />
      <div className={country.pageContainer}>
        <CountryBackground />
        <div className={country.contentContainer}>
          <PostCardList />
        </div>
      </div>
      <CountryWrite type="post" />
    </main>
  );
};

export default Page;
