import { useEffect, useState } from 'react';
import { BoardForm } from '@/types/country/board';
import { useFormContext } from 'react-hook-form';
import { getDateInRange } from '@/utils/date';
import TripSchedule from './TripSchedule';
import {
  lastListItem,
  listContainer,
  listItemContainer,
  listLine,
} from '@/styles/write/thirdstep/trip-schedule.css';

const TripScheduleList = () => {
  // TODO :: 일정 추가 페이지 완료 시 변경
  // const { watch, setValue } = useFormContext<BoardForm>();
  // const startDate = watch('startDate')
  // const endDate = watch('endDate)
  const startDate = '2024-03-24';
  const endDate = '2024-03-27';

  const [dateArray, setDateArray] = useState<string[]>([]);

  useEffect(() => {
    const result = getDateInRange(startDate, endDate);
    setDateArray(result);
  }, []);

  return (
    <div className={listContainer}>
      <span className={listLine}></span>
      <ul className={listItemContainer}>
        {dateArray.map((date, index) => (
          <li
            className={`${index === dateArray.length - 1 ? lastListItem : ''}`}
            key={date}
          >
            <TripSchedule day={index + 1} date={date} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripScheduleList;
