'use client';
import {
  selectContainer,
  moveToContinent,
  continentText,
} from '@/styles/main/page.css';
import { getCountryByContinent } from '@/api/getCountryInfo';
import ContinentList from './ContinentList';
import CountryList from './CountryList';
import { useCountryStore } from '@/store/countryStore';

const CountrySelect = () => {
  const { countries, continent, continentKor, setCountries, setContinent } =
    useCountryStore();

  const continentClick = async (continent: string, continentKor: string) => {
    const data = await getCountryByContinent(continent);
    setCountries(data.data);
    setContinent(continent, continentKor);
  };

  if (continent === '' && countries.length == 0) {
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
            setContinent('', '');
            setCountries([]);
          }}
        >
          <span className={moveToContinent}>{'홈 > '}</span>
          <span className={continentText}>{continentKor}</span>
        </div>
        <CountryList />
      </div>
    );
  }
};

export default CountrySelect;
