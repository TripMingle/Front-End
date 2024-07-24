'use client';
import '@/styles/font.css';
import { useState } from 'react';
import * as styles from '@/styles/country/board/write/page.css';
import { WhiteHeader } from '@/components/header/Header';
import Progress from '@/components/country/board/write/Progress';
import SearchBox from '@/components/country/board/write/SearchBox';
import CountrySelect from '@/components/country/board/write/CountrySelect';
import NextButton from '@/components/country/board/write/NextButton';
import ContinentList from '@/components/country/board/write/CountrySelect';

const Page = () => {
  const [step, setStep] = useState<number>(1);
  const [country, setCountry] = useState<string>('');
  const [searchCountry, setSearchCountry] = useState<string>('');

  const countryClickHandler = (country: string) => {
    setCountry(country);
  };

  const countrySearchHandler = (search: string) => {
    setSearchCountry(search);
  };

  const stepHandler = (step: number) => {
    setStep(step);
  };

  const components = [
    <>
      <SearchBox searchHandler={countrySearchHandler} />
      <CountrySelect
        country={country}
        searchCountry={searchCountry}
        countryClickHandler={countryClickHandler}
        countrySearchHandler={countrySearchHandler}
      />
    </>,
  ];

  const explains = [
    <>
      <strong className={styles.explainStrongText}>여행지</strong>를
      선택해주세요!
    </>,
    <>
      <strong className={styles.explainStrongText}>정보</strong>를 입력해주세요!
    </>,
    <>
      <strong className={styles.explainStrongText}>동행 일정</strong>을
      알려주세요!
    </>,
    <>
      <strong className={styles.explainStrongText}>내용</strong>을 입력해주세요!
    </>,
  ];

  return (
    <main>
      <WhiteHeader />
      <div className={styles.pageContainer}>
        <Progress step={step} />
        <p className={styles.explainText}>{explains[step - 1]}</p>
        <div className={styles.contentContainer}>{components[step - 1]}</div>
        <NextButton
          step={step}
          country={country}
          stepHandler={stepHandler}
          searchHandler={countrySearchHandler}
        />
      </div>
    </main>
  );
};

export default Page;
