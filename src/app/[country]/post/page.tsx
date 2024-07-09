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
            className={country.image}
            src="/images/countrybg.png"
            alt="countryBackgroundImage"
            fill
            sizes="1920px"
          />
        </div>
        <div className={country.contentContainer}>
          <MoveToMain country={'중국'} />
          <SelectCateogry category="food" />
        </div>
      </div>
    </main>
  );
}
