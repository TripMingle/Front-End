'use client';
import '@/styles/font.css';
import { useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as styles from '@/styles/write/page.css';
import Header from '@/components/header/Header';
import CountrySearch from '@/components/write/board/firststep/CountrySearch';
import CountryList from '@/components/write/post/firststep/CountryList';
import ContentForm from '@/components/write/post/secondstep/ContentForm';
import StepButton from '@/components/write/post/StepButton';
import Progress from '@/components/write/board/Progress';
import { PostForm, PostFormDefault } from '@/types/country/post';

const Page = () => {
  const methods = useForm<PostForm>({
    defaultValues: PostFormDefault,
  });

  const [step, setStep] = useState<number>(1);
  const [searchCountry, setSearchCountry] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const pageContentRef = useRef<any>(null);

  const stepHandler = (step: number) => {
    setStep(step);
  };

  const countrySearchHandler = (search: string) => {
    setSearchCountry(search);
  };

  const contentHandler = (content: string) => {
    setContent(content);
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
      <strong className={styles.explainStrongText}>내용</strong>을 입력해주세요!
    </>,
  ];

  return (
    <main>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <Progress currentStep={step} allStep={2} />
          <p className={styles.explainText}>{explains[step - 1]}</p>
          <FormProvider {...methods}>
            <div className={styles.contentContainer} ref={pageContentRef}>
              {components[step - 1]}
            </div>
            <StepButton
              step={step}
              content={content}
              searchCountry={searchCountry}
              stepHandler={stepHandler}
              searchHandler={countrySearchHandler}
              contentHandler={contentHandler}
            />
          </FormProvider>
        </div>
      </div>
    </main>
  );
};

export default Page;
