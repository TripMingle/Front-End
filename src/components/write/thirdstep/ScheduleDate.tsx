import * as styles from '@/styles/write/thirdstep/schedule-date.css';
import { BoardForm } from '@/types/country/board';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

const ScheduleDate = () => {
  const { watch } = useFormContext<BoardForm>();

  const startDate = watch('startDate');
  const endDate = watch('endDate');

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

export default ScheduleDate;
