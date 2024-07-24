import CalendarBox from './CalendarBox';
import * as styles from '@/styles/country/board/write/secondstep/info-input.css';

const InfoInput = () => {
  return (
    <div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>날짜</p>
        <CalendarBox />
      </div>
    </div>
  );
};

export default InfoInput;
