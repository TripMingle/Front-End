import { countryContainer } from '@/styles/main/country.css';
import { CountryType } from '@/types/main/country';
import CountryListItem from './CountryListItem';

const CountryList = ({ countryList }: { countryList: CountryType[] }) => {
  return (
    <ul className={countryContainer}>
      {countryList.map((country) => (
        <li key={country.countryNameEnglish}>
          <CountryListItem country={country} />
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
