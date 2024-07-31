'use client';
import { useCountryStore } from '@/store/countryStore';
import { countryText, moveToMain } from '@/styles/country/page.css';
import { formatCountryUrl } from '@/utils/country';
import { useRouter } from 'next/navigation';

const MoveToMain = () => {
  const router = useRouter();
  const continentKor = useCountryStore((state) => state.continentKor);
  const country = useCountryStore((state) => state.country);
  const countryKor = useCountryStore((state) => state.countryKor);
  const setContinent = useCountryStore((state) => state.setContinent);
  const setCountry = useCountryStore((state) => state.setCountry);

  const continentClickHandler = () => {
    setCountry('', '');
    router.push('/');
  };

  const countryClickHandler = () => {
    router.push('/' + formatCountryUrl(country));
  };

  const homeClickHandler = () => {
    setCountry('', '');
    setContinent('', '');
    router.push('/');
  };

  return (
    <div className={moveToMain}>
      <span onClick={homeClickHandler}>{'홈 > '}</span>
      <span onClick={continentClickHandler}>{`${continentKor} > `}</span>
      <span className={countryText} onClick={countryClickHandler}>
        {countryKor}
      </span>
    </div>
  );
};

export default MoveToMain;
