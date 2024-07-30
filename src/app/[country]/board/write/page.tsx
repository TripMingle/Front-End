'use client';
import '@/styles/font.css';
import { useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as styles from '@/styles/country/board/write/page.css';
import { WhiteHeader } from '@/components/header/Header';
import Progress from '@/components/country/board/write/Progress';
import SearchBox from '@/components/country/board/write/firststep/SearchBox';
import CountrySelect from '@/components/country/board/write/firststep/CountrySelect';
import StepButton from '@/components/country/board/write/StepButton';
import InfoInput from '@/components/country/board/write/secondstep/InfoInput';
import ContentInput from '@/components/country/board/write/fourthstep/ContentInput';
import { BoardForm, boardFormDefault } from '@/types/country/board';

const Page = () => {
  const methods = useForm<BoardForm>({ defaultValues: boardFormDefault });

  const [step, setStep] = useState<number>(1);
  const [searchCountry, setSearchCountry] = useState<string>('');
  const [languages, setLanguages] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');

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
    <></>,
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
      <WhiteHeader />
      <div className={styles.pageContainer}>
        <Progress step={step} />
        <p className={styles.explainText}>{explains[step - 1]}</p>
        <FormProvider {...methods}>
          <div className={styles.contentContainer} ref={pageContentRef}>
            {components[step - 1]}
          </div>
          <StepButton
            step={step}
            content={content}
            stepHandler={stepHandler}
            searchCountry={searchCountry}
            searchHandler={countrySearchHandler}
          />
        </FormProvider>
      </div>
    </main>
  );
};

export default Page;
