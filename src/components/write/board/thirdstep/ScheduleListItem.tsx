'use client';

import Image from 'next/image';
import { Droppable } from '@hello-pangea/dnd';
import * as styles from '@/styles/write/thirdstep/schedule-list-item.css';
import SchedulePlace from './SchedulePlace';
import { SchedulePlaceType } from '@/types/country/place';
import PlaceSearchModal from './PlaceSearchModal';
import useModal from '@/hooks/useModal';

type Props = {
  date: string;
  day: number;
  data: SchedulePlaceType[];
  placeListHandler: (newPlaceList: {
    [key: string]: SchedulePlaceType[];
  }) => void;
  mapHandler: (date: string, index: number) => void;
};

const ScheduleListItem = ({
  date,
  day,
  data,
  placeListHandler,
  mapHandler,
}: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  const addPlaceHandler = (placeList: SchedulePlaceType[]) => {
    const tmp = [...data, ...placeList];
    const newPlaceList = { [date]: tmp };
    placeListHandler(newPlaceList);
  };

  const removePlaceHandler = (
    event: React.MouseEvent<HTMLImageElement>,
    index: number,
  ) => {
    event.stopPropagation();
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
        <div className={styles.mapButton} onClick={() => mapHandler(date, -1)}>
          <Image
            className={styles.mapIcon}
            src="/icons/mini_map.svg"
            width={15}
            height={15}
            alt="mapIcon"
          />
          <span>지도</span>
        </div>
      </div>
      <div className={styles.schedulePlaceContainer}>
        <ul className={styles.listOrderContainer}>
          {data.map((element, index) => (
            <li className={styles.listOrderItem} key={element.boardScheduleId}>
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
                <li
                  key={element.boardScheduleId}
                  onClick={() => mapHandler(date, index)}
                >
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
      <PlaceSearchModal
        isOpen={isOpen}
        closeModal={closeModal}
        addPlaceHandler={addPlaceHandler}
      />
    </div>
  );
};

export default ScheduleListItem;
