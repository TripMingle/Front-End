import Image from 'next/image';
import Calendar from 'react-calendar';
import * as styles from '@/styles/write/secondstep/calendar-box.css';
import '@/styles/write/secondstep/calendar-custom.css';
import { useState } from 'react';
import { formatDay } from '@/utils/date';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';

type Value = Date | null;
type Range<T> = [T, T];

const CalendarBox = () => {
  const { watch, setValue } = useFormContext<BoardForm>();

  const startDate = watch('startDate');
  const endDate = watch('endDate');

  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const formatCalendarDay = (
    locale: string | undefined,
    date: Date,
  ): string => {
    const day = date.getDate();
    return day < 10 ? `0${day}` : `${day}`;
  };

  const clickHandler = () => {
    setShowCalendar(!showCalendar);
  };

  const dateChangeHandler = (
    value: Value | Range<Value>,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (Array.isArray(value) && value[0] && value[1]) {
      setValue('startDate', formatDay(value[0]));
      setValue('endDate', formatDay(value[1]));
      setShowCalendar(!showCalendar);
    }
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.container} onClick={clickHandler}>
        <span className={styles.explain({ select: !!startDate })}>
          {startDate
            ? `${startDate} ~ ${endDate}`
            : '시작 날짜와 끝 날짜 모두 선택해주세요.'}
        </span>
        <Image
          className={styles.calendarIcon}
          src="/icons/calendar.svg"
          width={24}
          height={24}
          alt="calendarIcon"
        />
      </div>
      <Calendar
        className={styles.calendar({ show: showCalendar })}
        locale="ko"
        selectRange={true}
        onChange={dateChangeHandler}
        formatDay={formatCalendarDay}
        minDate={new Date()}
        showNeighboringMonth={false}
        minDetail="year"
      />
    </div>
  );
};

export default CalendarBox;
