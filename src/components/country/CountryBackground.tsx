'use client';
import Image from 'next/image';
import { image } from '@/styles/country/page.css';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getCountryInfo } from '@/api/getCountryInfo';

const CountryBackground = () => {
  const pathname = usePathname();

  useEffect(() => {
    const country = getCountryName();
    
  }, []);

  const getCountryName = () => {
    return pathname.split('/')[1];
  };

  const getInformation = async(country: string) => {
    const data = await getCountryInfo(country)
    
  }

  return (
    <Image
      className={image}
      src={'' || '/images/emptyBackground.png'}
      alt="countryBackgroundImage"
      fill
      sizes="1920px"
    />
  );
};

export default CountryBackground;
