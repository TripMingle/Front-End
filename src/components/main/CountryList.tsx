import { countryContainer } from '@/styles/main/country.css';
import CountryListItem from './CountryListItem';
import { useCountryStore } from '@/store/countryStore';

const CountryList = () => {
  const { countries } = useCountryStore();
  return (
    <ul className={countryContainer}>
      {countries.map((country) => (
        <li key={country.countryNameEnglish}>
          <CountryListItem country={country} />
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
