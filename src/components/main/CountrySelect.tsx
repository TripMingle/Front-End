'use client';
import {
  selectContainer,
  moveToContinent,
  continentText,
  emptyCountry,
} from '@/styles/main/page.css';
import { getCountryByContinent, getCountryByKeyword } from '@/api/country';
import ContinentList from './ContinentList';
import CountryList from './CountryList';
import { useCountryStore } from '@/store/countryStore';
import { useEffect, useState } from 'react';
import CountryListSkeleton from './CountryListSkeleton';

const CountrySelect = () => {
  const {
    countries,
    continent,
    continentKor,
    countrySearch,
    setCountries,
    setContinent,
    initialize,
  } = useCountryStore();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const continentClick = async (continent: string, continentKor: string) => {
    const data = await getCountryByContinent(continent);
    setCountries(data.data);
    setContinent(continent, continentKor);
  };

  useEffect(() => {
    if (continent) {
      const getCountries = async () => {
        setIsLoading(true);
        const data = await getCountryByContinent(continent);
        setCountries(data.data);
        setIsLoading(false);
      };
      getCountries();
    }
  }, [continent]);

  useEffect(() => {
    if (countrySearch) {
      const getCountries = async () => {
        setIsLoading(true);
        const data = await getCountryByKeyword(countrySearch);
        setContinent('', '');
        setCountries(data.data);
        setIsLoading(false);
      };
      getCountries();
    }
  }, [countrySearch]);

  useEffect(() => {
    return () => {
      initialize();
    };
  }, []);

  if (continent === '' && !countrySearch) {
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
        {isLoading ? (
          <CountryListSkeleton />
        ) : countries.length ? (
          <CountryList />
        ) : (
          <div className={emptyCountry}> 검색 결과가 없습니다</div>
        )}
      </div>
    );
  }
};

export default CountrySelect;
