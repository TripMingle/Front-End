import * as styles from '@/styles/write/thirdstep/trip-schedule.css';
import Image from 'next/image';

type Props = {
  date: string;
  day: number;
};

const TripSchedule = ({ date, day }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <span className={styles.dayCircle}></span>
        <div className={styles.dayContainer}>
          <Image
            className={styles.airplaneIcon}
            src="/icons/write_airplane.svg"
            width={16}
            height={16}
            alt="airplane_icon"
          />
          <span>Day {day}</span>
        </div>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>+ 장소 추가</button>
      </div>
    </div>
  );
};

export default TripSchedule;
