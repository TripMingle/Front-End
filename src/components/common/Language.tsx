import * as styles from '@/styles/components/common/language.css';

const Korean = () => {
  return (
    <div className={styles.koreanBox}>
      <span className={styles.text}>한국어</span>
    </div>
  );
};

const English = () => {
  return (
    <div className={styles.englishBox}>
      <span className={styles.text}>영어</span>
    </div>
  );
};

const Chinese = () => {
  return (
    <div className={styles.ChineseBox}>
      <span className={styles.text}>중국어</span>
    </div>
  );
};

const Japanese = () => {
  return (
    <div className={styles.JapaneseBox}>
      <span className={styles.text}>일본어</span>
    </div>
  );
};

export const Language = ({ language }: { language: string }) => {
  if (language === 'korean') {
    return <Korean />;
  } else if (language === 'english') {
    return <English />;
  } else if (language === 'chinese') {
    return <Chinese />;
  } else {
    return <Japanese />;
  }
};
