'use client';
import {
  selectContainer,
  moveToContinent,
  continentText,
} from '@/styles/main/page.css';
import { getCountryByContinent } from '@/api/country';
import ContinentList from './ContinentList';
import CountryList from './CountryList';
import { useCountryStore } from '@/store/countryStore';
import { useEffect } from 'react';

const CountrySelect = () => {
  const {
    countries,
    continent,
    continentKor,
    setCountries,
    setContinent,
    initialize,
  } = useCountryStore();

  const continentClick = async (continent: string, continentKor: string) => {
    const data = await getCountryByContinent(continent);
    setCountries(data.data);
    setContinent(continent, continentKor);
  };

  useEffect(() => {
    const getCountries = async () => {
      const data = await getCountryByContinent(continent);
      setCountries(data.data);
    };

    if (continent) {
      getCountries();
    }

    return () => {
      initialize();
    };
  }, [continent]);

  if (continent === '' && countries.length == 0) {
    // 첫 화면일땐 대륙
    return (
      <div className={selectContainer}>
        <ContinentList clickHandler={continentClick} />
      </div>
    );
  } else {
    // 검색하거나 클릭하면 나라 리스트
    return (
      <div className={selectContainer}>
        <div className={moveToContinent} onClick={initialize}>
          <span className={moveToContinent}>{'홈 > '}</span>
          <span className={continentText}>{continentKor}</span>
        </div>
        <CountryList />
      </div>
    );
  }
};

export default CountrySelect;
