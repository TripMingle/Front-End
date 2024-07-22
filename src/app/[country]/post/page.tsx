import Image from 'next/image';
import '@/styles/font.css';
import * as country from '@/styles/country/page.css';
import * as styles from '@/styles/country/post/page.css';
import { WhiteHeader } from '@/components/header/Header';
import MoveToMain from '@/components/country/MoveToMain';
import CountryBackground from '@/components/country/CountryBackground';
import PostCardList from '@/components/country/post/PostCardList';
import CountryWrite from '@/components/common/CountryWrite';

const Page = () => {
  return (
    <main>
      <WhiteHeader />
      <div className={country.pageContainer}>
        <div className={country.imageContainer}>
          <CountryBackground />
        </div>
        <div className={country.contentContainer}>
          <MoveToMain />
          <PostCardList />
        </div>
      </div>
      <CountryWrite />
    </main>
  );
};

export default Page;
