'use client';
import { useState } from 'react';
import {
  selectContainer,
  moveToContinent,
  continentText,
} from '@/styles/main/page.css';
import Countries from './Country';
import { getCountryByContinent } from '@/api/getCountryInfo';
import ContinentList from './ContinentList';

const CountrySelect = () => {
  const [countries, setCountries] = useState<Country[]>([]);
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
        <Countries props={countries} />
      </div>
    );
  }
};

export default CountrySelect;
