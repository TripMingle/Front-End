'use client';
import { useEffect, useState } from 'react';
import {
  selectContainer,
  moveToContinent,
  continentText,
} from '@/styles/main/page.css';
import Countries from './Country';
import Continents from './Continent';
import { getCountryBycontinent } from '@/api/getCountryInfo';
import { useCountryStore } from '@/store/countryStore';

const SelectContent = () => {
  const [country, setCountry] = useState<Country[]>([]);
  const continent = useCountryStore((state) => state.continent);
  const continentKor = useCountryStore((state) => state.continentKor);
  const setContinent = useCountryStore((state) => state.setContinent);

  const continentClick = async (continent: string, continentKor: string) => {
    const data = await getCountryBycontinent(continent);
    setCountry(data.data);
    setContinent(continent, continentKor);
  };

  const getCountryData = async (continent: string) => {
    const data = await getCountryBycontinent(continent);
    setCountry(data.data);
  };

  useEffect(() => {
    if (continent) getCountryData(continent);
  }, []);

  if (continent === '') {
    return (
      <div className={selectContainer}>
        <Continents clickHandler={continentClick} />
      </div>
    );
  } else {
    return (
      <div className={selectContainer}>
        <div className={moveToContinent} onClick={() => setContinent('', '')}>
          <span>{'홈 > '}</span>
          <span className={continentText}>{continentKor}</span>
        </div>
        <Countries props={country} />
      </div>
    );
  }
};

export default SelectContent;
