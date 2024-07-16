'use client';
import Image from 'next/image';
import { image } from '@/styles/country/page.css';
import { useCountryStore } from '@/store/countryStore';

const CountryBackground = () => {
  const url = useCountryStore((state) => state.countryUrl);
  return (
    <Image
      className={image}
      src={url}
      alt="countryBackgroundImage"
      fill
      sizes="1920px"
    />
  );
};

export default CountryBackground;
