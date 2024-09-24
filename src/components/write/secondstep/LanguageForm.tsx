import Image from 'next/image';
import { useState } from 'react';
import * as styles from '@/styles/write/secondstep/language-box.css';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';

const LanguageForm = ({
  languages,
  languagesHandler,
}: {
  languages: string[];
  languagesHandler: (eng: string, kor: string) => void;
}) => {
  const { setValue, watch } = useFormContext<BoardForm>();
  const language = watch('language');
  const [showLanguages, setShowLanguages] = useState<boolean>(false);

  const clickHandler = (eng: string, kor: string) => {
    setValue('language', eng);
    languagesHandler(eng, kor);
  };

  return (
    <div
      className={styles.container({ show: showLanguages })}
      onClick={() => setShowLanguages(!showLanguages)}
    >
      <div className={styles.explainContainer}>
        <span className={styles.explain({ select: languages.length > 0 })}>
          {languages.length ? languages[1] : '사용하시는 언어를 선택해 주세요.'}
        </span>
        <Image
          className={styles.dropIcon({ show: showLanguages })}
          src="/icons/drop_arrow.svg"
          alt="dropDownIcon"
          width={24}
          height={24}
        />
      </div>
      {showLanguages ? (
        <ul className={styles.languageListContainer}>
          {Languages.map((l) => (
            <li
              className={styles.languageContainer({
                select: l.eng === languages[0],
              })}
              key={l.eng}
              onClick={() => clickHandler(l.eng, l.kor)}
            >
              <span className={styles.language}>{l.kor}</span>
              <Image
                className={styles.checkIcon({ select: l.eng === languages[0] })}
                src="/icons/blue_check.svg"
                alt="checkIcon"
                width={24}
                height={24}
              />
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

const Languages = [
  { eng: 'Korean', kor: '한국어' },
  { eng: 'English', kor: '영어' },
  { eng: 'Chinese', kor: '중국어' },
  { eng: 'Japanese', kor: '일본어' },
  { eng: 'Vietnamese', kor: '베트남어' },
  { eng: 'German', kor: '독일어' },
  { eng: 'French', kor: '프랑스어' },
];

export default LanguageForm;
