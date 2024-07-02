'use client';
import { useState } from 'react';
import { selectContainer } from '@/app/page.css';
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
        <Countries />
        <div
          onClick={() => {
            setContinent('');
          }}
        >
          {'< 대륙 선택'}
        </div>
      </div>
    );
  }
};

export default SelectContent;
