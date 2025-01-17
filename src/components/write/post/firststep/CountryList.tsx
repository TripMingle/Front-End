import {
  listContainer,
  resultContainer,
} from '@/styles/write/firststep/country-list.css';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { getCountryByContinent, getCountryByKeyword } from '@/api/country';
import CountryListItem from '@/components/write/board/firststep/CountryListItem';
import { CountryType } from '@/types/main/country';
import { PostForm } from '@/types/country/post';

const CountrySelect = ({
  searchCountry,
  countrySearchHandler,
}: {
  searchCountry: string;
  countrySearchHandler: (search: string) => void;
}) => {
  const { watch, setValue } = useFormContext<PostForm>();
  const country = watch('country');

  const [countryList, setCountryList] = useState<CountryType[]>([]);

  const getCountryList = async (keyword: string) => {
    if (continents.includes(searchCountry)) {
      const data = await getCountryByContinent(keyword);
      setCountryList(data.data);
    } else {
      const data = await getCountryByKeyword(keyword);
      setCountryList(data.data);
    }
  };

  const countryHandler = (country: string, continent: string) => {
    setValue('country', country);
  };

  useEffect(() => {
    if (searchCountry) {
      getCountryList(searchCountry);
    } else {
      setCountryList([]);
    }
    if (country) setValue('country', '');
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
                <CountryListItem
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
                  countryHandler(
                    countryItem.countryNameEnglish,
                    countryItem.continentNameEnglish,
                  )
                }
              >
                <CountryListItem
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
