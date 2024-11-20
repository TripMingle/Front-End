'use client';
import Image from 'next/image';
import { image, imageContainer } from '@/styles/country/page.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCountryInfo } from '@/api/country';
import MoveToMain from './MoveToMain';
import { getCountryName } from '@/utils/country';
import { CountryInfo } from '@/types/main/country';
import { useApiHandler } from '@/hooks/useApiHandler';

const CountryBackground = () => {
  const pathname = usePathname();

  const [imageUrl, setImageUrl] = useState<string>('');
  const [countryInfo, setCountryInfo] = useState<CountryInfo>({
    continentName: '',
    continentEnglishName: '',
    countryName: '',
    countryEnglishName: '',
  });

  const [error, setError] = useState<Error | null>(null);

  const getInformation = async (country: string) => {
    try {
      const data = await getCountryInfo(country);
      setImageUrl(data.data.countryImageUrl);
      setCountryInfo(data.data);
    } catch (err) {
      setError(new Error('없는 나라 입니다.'));
    }
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
          width={1920}
          height={460}
        />
      </div>
      <MoveToMain props={countryInfo} />
    </>
  );
};

export default CountryBackground;
