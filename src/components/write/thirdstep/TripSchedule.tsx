import Image from 'next/image';
import { Droppable } from '@hello-pangea/dnd';
import * as styles from '@/styles/write/thirdstep/trip-schedule.css';
import SchedulePlace from './SchedulePlace';
import { SchedulePlaceType } from '@/types/country/place';

type Props = {
  date: string;
  day: number;
  data: SchedulePlaceType[];
};

const TripSchedule = ({ date, day, data }: Props) => {
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
      <div>
        <Droppable droppableId={date}>
          {(provided) => (
            <ul
              className={styles.placeListCotainer}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.map((e, i) => (
                <li key={e.id}>
                  <SchedulePlace place={e} index={i} />
                </li>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>+ 장소 추가</button>
      </div>
    </div>
  );
};

export default TripSchedule;
