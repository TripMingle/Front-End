'use client';
import Image from 'next/image';
import { image, imageContainer } from '@/styles/country/page.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCountryInfo } from '@/api/getCountryInfo';
import MoveToMain from './MoveToMain';
import { getCountryName } from '@/utils/country';

const CountryBackground = () => {
  const pathname = usePathname();

  const [imageUrl, setImageUrl] = useState<string>('');
  const [countryInfo, setCountryInfo] = useState<CountryInfo>({
    continentName: '',
    continentEnglishName: '',
    countryName: '',
    countryEnglishName: '',
  });

  const getInformation = async (country: string) => {
    const data = await getCountryInfo(country);
    setImageUrl(data.data.countryImageUrl);
    setCountryInfo(data.data);
  };

  useEffect(() => {
    const country = getCountryName(pathname);
    getInformation(country);
  }, []);

  return (
    <>
      <div className={imageContainer}>
        <Image
          className={image}
          src={imageUrl || '/images/emptyBackground.png'}
          alt="countryBackgroundImage"
          fill
          sizes="1920px"
        />
      </div>
      <MoveToMain props={countryInfo} />
    </>
  );
};

export default CountryBackground;
