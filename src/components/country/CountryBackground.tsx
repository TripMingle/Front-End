import Image from 'next/image';
import MoveToMain from './MoveToMain';
import { image, imageContainer } from '@/styles/country/page.css';

const CountryBackground = async ({ country }: { country: string }) => {
  const res = await fetch(`${process.env.FRONT_URL}/api/country/${country}`);
  const data = await res.json();
  const countryInfo = data.data;

  return (
    <>
      <div className={imageContainer}>
        <Image
          className={image}
          src={countryInfo.countryImageUrl || '/images/emptyBackground.png'}
          alt="countryBackgroundImage"
          priority
          fill
          sizes="(max-width: 1920px) 100vw, 1920px"
        />
      </div>
      <MoveToMain props={countryInfo} />
    </>
  );
};

export default CountryBackground;
