import * as styles from '@/styles/components/common/language.css';

export const Korean = () => {
  return (
    <div className={styles.koreanBox}>
      <span className={styles.text}>한국어</span>
    </div>
  );
};

export const English = () => {
  return (
    <div className={styles.englishBox}>
      <span className={styles.text}>영어</span>
    </div>
  );
};

export const Chinese = () => {
  return (
    <div className={styles.ChineseBox}>
      <span className={styles.text}>중국어</span>
    </div>
  );
};

export const Japanese = () => {
  return (
    <div className={styles.JapaneseBox}>
      <span className={styles.text}>일본어</span>
    </div>
  );
};
