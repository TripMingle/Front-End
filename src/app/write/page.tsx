'use client';
import '@/styles/font.css';
import { useEffect, useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as styles from '@/styles/write/page.css';
import Header from '@/components/header/Header';
import Progress from '@/components/write/Progress';
import SearchBox from '@/components/write/firststep/SearchBox';
import CountrySelect from '@/components/write/firststep/CountrySelect';
import StepButton from '@/components/write/StepButton';
import InfoInput from '@/components/write/secondstep/InfoInput';
import ContentInput from '@/components/write/fourthstep/ContentInput';
import { BoardForm, boardFormDefault } from '@/types/country/board';
import ScheduleInput from '@/components/write/thirdstep/ScheduleInput';
import { SchedulePlaceType } from '@/types/country/place';

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
      <SearchBox
        searchCountry={searchCountry}
        countrySearchHandler={countrySearchHandler}
      />
      <CountrySelect
        searchCountry={searchCountry}
        countrySearchHandler={countrySearchHandler}
      />
    </>,
    <>
      <InfoInput languages={languages} languagesHandler={languagesHandler} />
    </>,
    <>
      <ScheduleInput
        placeListHandler={PlaceListHandler}
        placeList={placeList}
      />
    </>,
    <>
      <ContentInput
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
