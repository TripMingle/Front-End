'use client';
import '@/styles/font.css';
import { useState } from 'react';
import * as styles from '@/styles/country/board/write/page.css';
import { WhiteHeader } from '@/components/header/Header';
import Progress from '@/components/country/board/write/Progress';
import SearchBox from '@/components/country/board/write/firststep/SearchBox';
import CountrySelect from '@/components/country/board/write/firststep/CountrySelect';
import StepButton from '@/components/country/board/write/StepButton';
import InfoInput from '@/components/country/board/write/secondstep/InfoInput';

const Page = () => {
  const [step, setStep] = useState<number>(2);
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
    <>
      <InfoInput />
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
        <StepButton
          step={step}
          country={country}
          searchCountry={searchCountry}
          stepHandler={stepHandler}
          searchHandler={countrySearchHandler}
          countryHandler={countryClickHandler}
        />
      </div>
    </main>
  );
};

export default Page;
