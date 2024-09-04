'use client';

import Image from 'next/image';
import { Droppable } from '@hello-pangea/dnd';
import * as styles from '@/styles/write/thirdstep/trip-schedule.css';
import SchedulePlace from './SchedulePlace';
import { SchedulePlaceType } from '@/types/country/place';

type Props = {
  date: string;
  day: number;
  data: SchedulePlaceType[];
  openModal: () => void;
};

const TripSchedule = ({ date, day, data, openModal }: Props) => {
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
              <span className={styles.placeListLine}></span>
              {data.map((element, index) => (
                <li key={element.id}>
                  <div className={styles.placeItemContainer}>
                    <span className={styles.placeNumber}>{index + 1}</span>
                    <SchedulePlace place={element} index={index} />
                  </div>
                </li>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={openModal}>
          + 장소 추가
        </button>
      </div>
    </div>
  );
};

export default TripSchedule;
