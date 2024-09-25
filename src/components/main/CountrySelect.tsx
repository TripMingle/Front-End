'use client';
import { useState } from 'react';
import {
  selectContainer,
  moveToContinent,
  continentText,
} from '@/styles/main/page.css';
import { getCountryByContinent } from '@/api/getCountryInfo';
import { CountryType } from '@/types/main/country';
import ContinentList from './ContinentList';
import CountryList from './CountryList';

const CountrySelect = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [continent, setContinent] = useState<string>('');
  const [continentKor, setContinentKor] = useState<string>('');

  const continentClick = async (continent: string, continentKor: string) => {
    const data = await getCountryByContinent(continent);
    setCountries(data.data);
    setContinent(continent);
    setContinentKor(continentKor);
  };

  if (continent === '') {
    return (
      <div className={selectContainer}>
        <ContinentList clickHandler={continentClick} />
      </div>
    );
  } else {
    return (
      <div className={selectContainer}>
        <div
          className={moveToContinent}
          onClick={() => {
            setContinent('');
            setContinentKor('');
          }}
        >
          <span className={moveToContinent}>{'홈 > '}</span>
          <span className={continentText}>{continentKor}</span>
        </div>
        <CountryList countryList={countries} />
      </div>
    );
  }
};

export default CountrySelect;
