import Image from 'next/image';
import '@/styles/font.css';
import * as country from '@/styles/country/page.css';
import { WhiteHeader } from '@/components/header/Header';
import MoveToMain from '@/components/country/MoveToMain';
import SelectCateogry from '@/components/country/post/SelectCategory';

export default function Page() {
  return (
    <main>
      <WhiteHeader />
      <div className={country.pageContainer}>
        <div className={country.imageContainer}>
          <Image
            src="/images/countrybg.png"
            alt="countryBackgroundImage"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={country.contentContainer}>
          <MoveToMain />
          <SelectCateogry category="food" />
        </div>
      </div>
    </main>
  );
}
