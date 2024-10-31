import * as styles from '@/styles/components/common/language.css';

export const Language = ({ language }: { language: string }) => {
  if (language === 'Korean') {
    return (
      <div>
        <span className={styles.text({ language: 'korean' })}>한국어</span>
      </div>
    );
  } else if (language === 'English') {
    return (
      <div>
        <span className={styles.text({ language: 'english' })}>영어</span>
      </div>
    );
  } else if (language === 'Chinese') {
    return (
      <div>
        <span className={styles.text({ language: 'chinese' })}>중국어</span>
      </div>
    );
  } else {
    return (
      <div>
        <span className={styles.text({ language: 'japanese' })}>일본어</span>
      </div>
    );
  }
};
