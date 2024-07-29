import Image from 'next/image';
import { useState } from 'react';
import * as styles from '@/styles/country/board/write/secondstep/language-box.css';

const LanguageBox = () => {
  const [showLanguages, SetShowLanguages] = useState<boolean>(false);
  const [language, setLanguage] = useState<string[]>([]);

  return (
    <div
      className={styles.container({ show: showLanguages })}
      onClick={() => SetShowLanguages(!showLanguages)}
    >
      <div className={styles.explainContainer}>
        <span className={styles.explain({ select: language.length > 0 })}>
          {language.length ? language[1] : '사용하시는 언어를 선택해 주세요.'}
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
                select: l.eng === language[0],
              })}
              key={l.eng}
              onClick={() => setLanguage([l.eng, l.kor])}
            >
              <span className={styles.language}>{l.kor}</span>
              <Image
                className={styles.checkIcon({ select: l.eng === language[0] })}
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

export default LanguageBox;
