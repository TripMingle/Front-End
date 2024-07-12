'use client';
import { useState } from 'react';
import {
  selectContainer,
  moveToContinent,
  continentText,
} from '@/styles/main/page.css';
import Countries from './Country';
import Continents from './Continent';
import { getCountryBycontinent } from '@/api/getCountryInfo';

const SelectContent = () => {
  const [continent, setContinent] = useState<string>('');
  const [country, setCountry] = useState<Country[]>([]);

  const continentClick = async (continent: string) => {
    const data = await getCountryBycontinent(continent);
    setCountry(data.data);
    setContinent(continent);
  };

  if (continent === '') {
    return (
      <div className={selectContainer}>
        <Continents clickHandler={continentClick} />
      </div>
    );
  } else {
    return (
      <div className={selectContainer}>
        <div
          className={moveToContinent}
          onClick={() => {
            setContinent('');
          }}
        >
          <span>{'홈 > '}</span>
          <span className={continentText}>{continent}</span>
        </div>
        <Countries props={country} />
      </div>
    );
  }
};

export default SelectContent;
