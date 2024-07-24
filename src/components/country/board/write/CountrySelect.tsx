import { listContainer, resultContainer } from '@/styles/country/board/write/country-box.css';
import CountryBox from './CountryBox';
import { useEffect, useState } from 'react';
import {
  getCountryByContinent,
  getCountryByKeyword,
} from '@/api/getCountryInfo';

const CountrySelect = ({
  country,
  searchCountry,
  countryClickHandler,
  countrySearchHandler,
}: {
  country: string;
  searchCountry: string;
  countryClickHandler: (country: string) => void;
  countrySearchHandler: (search: string) => void;
}) => {
  const [countryList, setCountryList] = useState<Country[]>([]);

  const getCountryList = async (keyword: string) => {
    if (continents.includes(searchCountry)) {
      const data = await getCountryByContinent(keyword);
      setCountryList(data.data);
    } else {
      const data = await getCountryByKeyword(keyword);
      setCountryList(data.data);
    }
  };

  useEffect(() => {
    if (searchCountry) {
      getCountryList(searchCountry);
    }
  }, [searchCountry]);

  return (
    <div className={resultContainer}>
      <ul className={listContainer}>
        {searchCountry === ''
          ? continentsInfo.map((continent) => (
              <li
                key={continent.continent}
                onClick={() => countrySearchHandler(continent.continent)}
              >
                <CountryBox
                  name={continent.continent}
                  nameKor={continent.continentKor}
                  select={country}
                />
              </li>
            ))
          : countryList.map((countryItem) => (
              <li
                key={countryItem.countryNameEnglish}
                onClick={() =>
                  countryClickHandler(countryItem.countryNameEnglish)
                }
              >
                <CountryBox
                  name={countryItem.countryNameEnglish}
                  nameKor={countryItem.countryName}
                  select={country}
                />
              </li>
            ))}
      </ul>
    </div>
  );
};

const continents = [
  'Asia',
  'Europe',
  'Oceania',
  'South America',
  'North America',
  'Africa',
];

const continentsInfo = [
  {
    continent: 'Asia',
    continentKor: '아시아',
  },
  {
    continent: 'Europe',
    continentKor: '유럽',
  },
  {
    continent: 'Oceania',
    continentKor: '오세아니아',
  },
  {
    continent: 'South America',
    continentKor: '남아메리카',
  },
  {
    continent: 'North America',
    continentKor: '북아메리카',
  },
  {
    continent: 'Africa',
    continentKor: '아프리카',
  },
];

export default CountrySelect;
