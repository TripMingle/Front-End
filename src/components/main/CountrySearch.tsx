'use client';
import { useCountryStore } from '@/store/countryStore';
import * as styles from '@/styles/main/page.css';
import Image from 'next/image';
import { useState } from 'react';

const CountrySearch = () => {
  const [keyword, setKeyword] = useState<string>('');
  const { setCountrySearch } = useCountryStore();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const clickHandler = () => {
    if (keyword) {
      setCountrySearch(keyword);
      setKeyword('');
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
      <form
        className={styles.inputBox}
        onSubmit={(e) => {
          e.preventDefault();
          clickHandler();
        }}
      >
        <input
          className={styles.input}
          value={keyword}
          type="text"
          placeholder="나라를 입력하세요."
          onChange={changeHandler}
        />
        <Image
          className={styles.searchIcon}
          src="/icons/w_search.svg"
          width={24}
          height={24}
          alt="search"
          onClick={clickHandler}
        />
      </form>
    </div>
  );
};

export default CountrySearch;
