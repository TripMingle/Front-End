'use client';

import Image from 'next/image';
import { Droppable } from '@hello-pangea/dnd';
import * as styles from '@/styles/write/thirdstep/trip-schedule.css';
import SchedulePlace from './SchedulePlace';
import { SchedulePlaceType } from '@/types/country/place';
import AddPlaceModal from './AddPlaceModal';
import useModal from '@/hooks/useModal';

type Props = {
  date: string;
  day: number;
  data: SchedulePlaceType[];
  placeListHandler: (newPlaceList: {
    [key: string]: SchedulePlaceType[];
  }) => void;
};

const TripSchedule = ({ date, day, data, placeListHandler }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  const addPlaceHandler = (placeList: SchedulePlaceType[]) => {
    const tmp = [...data, ...placeList];
    const newPlaceList = { [date]: tmp };
    placeListHandler(newPlaceList);
  };

  const removePlaceHandler = (index: number) => {
    const tmp = [...data];
    tmp.splice(index, 1);
    const newPlaceList = { [date]: tmp };
    placeListHandler(newPlaceList);
  };

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
      <div className={styles.schedulePlaceContainer}>
        <ul className={styles.listOrderContainer}>
          {data.map((element, index) => (
            <li className={styles.listOrderItem} key={element.id}>
              <span className={styles.listLine}></span>
              <span className={styles.listNumber}>{index + 1}</span>
            </li>
          ))}
        </ul>
        <Droppable droppableId={date}>
          {(provided) => (
            <ul
              className={styles.placeListContainer}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.map((element, index) => (
                <li key={element.id}>
                  <SchedulePlace
                    place={element}
                    index={index}
                    removeHandler={removePlaceHandler}
                  />
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
      <AddPlaceModal
        isOpen={isOpen}
        closeModal={closeModal}
        addPlaceHandler={addPlaceHandler}
      />
    </div>
  );
};

export default TripSchedule;
