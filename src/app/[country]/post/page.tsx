import Image from 'next/image';
import '@/styles/font.css';
import * as country from '@/styles/country/page.css';
import { WhiteHeader } from '@/components/header/Header';
import MoveToMain from '@/components/country/MoveToMain';
import SelectCateogry from '@/components/country/post/SelectCategory';
import CountryBackground from '@/components/country/CountryBackground';

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
          <SelectCateogry category="food" />
        </div>
      </div>
    </main>
  );
};

export default Page;
