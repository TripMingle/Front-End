'use client';
import '@/styles/font.css';
import { useEffect, useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as styles from '@/styles/write/page.css';
import Header from '@/components/header/Header';
import { BoardForm, boardFormDefault } from '@/types/country/board';
import { SchedulePlaceType } from '@/types/country/place';
import CountrySearch from '@/components/write/firststep/CountrySearch';
import CountryList from '@/components/write/firststep/CountryList';
import InfoForm from '@/components/write/secondstep/InfoForm';
import ScheduleForm from '@/components/write/thirdstep/ScheduleForm';
import ContentForm from '@/components/write/fourthstep/ContentForm';
import StepButton from '@/components/write/StepButton';
import Progress from '@/components/write/Progress';

const Page = () => {
  const methods = useForm<BoardForm>({ defaultValues: boardFormDefault });

  const [step, setStep] = useState<number>(1);
  const [searchCountry, setSearchCountry] = useState<string>('');
  const [languages, setLanguages] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');
  const [placeList, setPlaceList] = useState<{
    [key: string]: SchedulePlaceType[];
  }>({});

  const pageContentRef = useRef<any>(null);

  const stepHandler = (step: number) => {
    setStep(step);
  };

  const countrySearchHandler = (search: string) => {
    setSearchCountry(search);
  };

  const languagesHandler = (eng: string, kor: string) => {
    setLanguages([eng, kor]);
  };

  const contentHandler = (content: string) => {
    setContent(content);
  };

  const PlaceListHandler = (newPlaceList: {
    [key: string]: SchedulePlaceType[];
  }) => {
    setPlaceList((prev) => ({
      ...prev,
      ...newPlaceList,
    }));
  };

  const scrollToBottom = () => {
    pageContentRef.current.scrollTop = pageContentRef.current.scrollHeight;
  };

  const components = [
    <>
      <CountrySearch
        searchCountry={searchCountry}
        countrySearchHandler={countrySearchHandler}
      />
      <CountryList
        searchCountry={searchCountry}
        countrySearchHandler={countrySearchHandler}
      />
    </>,
    <>
      <InfoForm languages={languages} languagesHandler={languagesHandler} />
    </>,
    <>
      <ScheduleForm placeListHandler={PlaceListHandler} placeList={placeList} />
    </>,
    <>
      <ContentForm
        content={content}
        contentHandler={contentHandler}
        scrollHandler={scrollToBottom}
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
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <Progress step={step} />
          <p className={styles.explainText}>{explains[step - 1]}</p>
          <FormProvider {...methods}>
            <div className={styles.contentContainer} ref={pageContentRef}>
              {components[step - 1]}
            </div>
            <StepButton
              step={step}
              content={content}
              searchCountry={searchCountry}
              placeList={placeList}
              stepHandler={stepHandler}
              searchHandler={countrySearchHandler}
            />
          </FormProvider>
        </div>
      </div>
    </main>
  );
};

export default Page;
