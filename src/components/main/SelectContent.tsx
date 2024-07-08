'use client';
import { useState } from 'react';
import {
  selectContainer,
  moveToContinent,
  continentText,
} from '@/styles/main/page.css';
import Countries from './Country';
import Continents from './Continent';

const SelectContent = () => {
  const [continent, setContinent] = useState<string>('');

  const continentClick = (continent: string) => {
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
        <Countries />
      </div>
    );
  }
};

export default SelectContent;
