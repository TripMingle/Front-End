'use client';
import { useCountryStore } from '@/store/countryStore';
import { countryText, moveToMain } from '@/styles/country/page.css';
import { useRouter } from 'next/navigation';

const MoveToMain = () => {
  const router = useRouter();
  const continent = useCountryStore((state) => state.continent);
  const country = useCountryStore((state) => state.country);
  const setContinent = useCountryStore((state) => state.setContinent);
  const setCountry = useCountryStore((state) => state.setCountry);

  const continentClickHandler = () => {
    setCountry('');
    router.push('/');
  };

  const countryClickHandler = () => {
    router.push('/' + country);
  };

  const homeClickHandler = () => {
    setCountry('');
    setContinent('');
    router.push('/');
  };

  return (
    <div className={moveToMain}>
      <span onClick={homeClickHandler}>{'홈 > '}</span>
      <span onClick={continentClickHandler}>{`${continent} > `}</span>
      <span className={countryText} onClick={countryClickHandler}>
        {country}
      </span>
    </div>
  );
};

export default MoveToMain;
