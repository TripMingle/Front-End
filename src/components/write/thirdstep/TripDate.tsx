import * as styles from '@/styles/write/thirdstep/trip-date.css';
import { BoardForm } from '@/types/country/board';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

const TripDate = () => {
  const { watch, setValue } = useFormContext<BoardForm>();

  // TODO:: ScheduleInput 개발 완료 시 watch값으로 변경
  //   const startDate = watch('startDate');
  //   const endDate = watch('endDate');
  const startDate = `2024.03.23`;
  const endDate = `2024.03.27`;

  return (
    <div className={styles.container}>
      <p className={styles.title}>여행 일정</p>
      <div className={styles.dateContainer}>
        <Image
          src="/icons/write_calendar.svg"
          alt="tripdate"
          width={15}
          height={15}
        />
        <span className={styles.dateText}>
          {startDate} ~ {endDate}
        </span>
      </div>
    </div>
  );
};

export default TripDate;
