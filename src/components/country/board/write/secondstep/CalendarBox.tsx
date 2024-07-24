import * as styles from '@/styles/country/board/write/secondstep/calendar-box.css';
import Image from 'next/image';

const CalendarBox = () => {
  return (
    <div className={styles.container}>
      <span className={styles.explain({ select: false })}>
        {'우측 캘린터에서 설정해 주세요.'}
      </span>
      <Image
        className={styles.calendarIcon}
        src="/icons/calendar.svg"
        width={24}
        height={24}
        alt="calendarIcon"
      />
    </div>
  );
};

export default CalendarBox;
