'use client';

import useModal from '@/hooks/useModal';
import * as styles from '@/styles/country/board/id/schedule-button.css';
import Image from 'next/image';
import ScheduleModal from './ScheduleModal';

const ScheduleButton = ({
  startDate,
  endDate,
  country,
  boardId,
}: {
  startDate: string;
  endDate: string;
  country: string;
  boardId: number;
}) => {
  const { isOpen, openModal, closeModal } = useModal();

  const clickHandler = () => {
    if (isOpen) closeModal();
    else openModal();
  };

  return (
    <div className={styles.infoContainer} onClick={clickHandler}>
      <p className={styles.infoTitle}>여행 일정</p>
      <button className={styles.scheduleButton}>
        <div className={styles.dateContainer}>
          <Image
            className={styles.calendarIcon}
            src="/icons/color_calendar.png"
            width={18}
            height={18}
            alt="calendarIcon"
          />
          <span className={styles.dateText}>
            {startDate} ~ {endDate}
          </span>
        </div>
        <div className={styles.explain}>눌러서 여행 일정 확인하기!</div>
      </button>
      <ScheduleModal
        isOpen={isOpen}
        closeModal={clickHandler}
        boardId={boardId}
        startDate={startDate}
        endDate={endDate}
        country={country}
      />
    </div>
  );
};

export default ScheduleButton;
