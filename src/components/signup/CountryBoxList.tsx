import * as styles from '@/styles/signup/country-list.css';

type Props = {
  countries: { countryEng: string; countryKor: string }[];
  handler: (kor: string, eng: string) => void;
};

const CountryBoxList = ({ countries, handler }: Props) => {
  return countries.length ? (
    <ul className={styles.listContainer}>
      {countries.map((country, index) => (
        <li
          className={styles.listItem}
          key={index}
          onClick={() => {
            handler(country.countryEng, country.countryKor);
          }}
        >
          {country.countryKor}
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};

export default CountryBoxList;
