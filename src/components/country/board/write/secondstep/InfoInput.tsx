import * as styles from '@/styles/country/board/write/secondstep/info-input.css';
import CalendarBox from './CalendarBox';
import LanguageBox from './LanguageBox';
import AttributeBox from './AttributeBox';
import TypeBox from './TypeBox';

const InfoInput = () => {
  return (
    <div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>날짜</p>
        <CalendarBox />
      </div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>언어</p>
        <LanguageBox />
      </div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>동행자 특성</p>
        <AttributeBox />
      </div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>동행 타입 (중복 가능)</p>
        <TypeBox />
      </div>
    </div>
  );
};

export default InfoInput;
