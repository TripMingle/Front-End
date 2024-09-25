'use client';
import { getCountryByKeyword } from '@/api/getCountryInfo';
import { useCountryStore } from '@/store/countryStore';
import * as styles from '@/styles/main/page.css';
import Image from 'next/image';
import { useState } from 'react';

const CountrySearch = () => {
  const [keyword, setKeyword] = useState<string>('');
  const { setCountries, setContinent } = useCountryStore();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const clickHandler = async () => {
    if (keyword) {
      const data = await getCountryByKeyword(keyword);
      setCountries(data.data);
      setContinent('', '');
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      clickHandler();
    }
  };

  return (
    <div className={styles.boxContainer}>
      <div className={styles.exploreContainer}>
        <div className={styles.bigCircle}></div>
        <div className={styles.smallCircle}></div>
        <div className={styles.exploreText}>
          <span>
            EXPLORE
            <br />
            YOUR DREAM
          </span>
        </div>
      </div>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          value={keyword}
          type="text"
          placeholder="나라를 입력하세요."
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
        />
        <Image
          className={styles.searchIcon}
          src="/icons/w_search.svg"
          width={24}
          height={24}
          alt="search"
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};

export default CountrySearch;
