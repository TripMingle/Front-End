import * as styles from '@/styles/signup/country-list.css';
import { useEffect, useRef } from 'react';

type Props = {
  countries: { countryEng: string; countryKor: string }[];
  countryHandler: (kor: string, eng: string) => void;
  closeHandler: () => void;
};

const CountryBoxList = ({ countries, countryHandler, closeHandler }: Props) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        closeHandler();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [countries]);

  return countries.length ? (
    <ul className={styles.listContainer} ref={listRef}>
      {countries.map((country, index) => (
        <li
          className={styles.listItem}
          key={index}
          onClick={() => {
            countryHandler(country.countryEng, country.countryKor);
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
