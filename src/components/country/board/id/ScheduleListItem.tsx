import Image from 'next/image';
import * as styles from '@/styles/write/thirdstep/schedule-list-item.css';
import { SchedulePlaceType } from '@/types/country/place';
import { container, place } from '@/styles/write/thirdstep/schedule-place.css';

type Props = {
  date: string;
  day: number;
  data: SchedulePlaceType[];
  mapHandler: (date: string, index: number) => void;
};

const ScheduleListItem = ({ date, day, data, mapHandler }: Props) => {
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

        <ul className={styles.placeListContainer}>
          {data.map((element, index) => (
            <li
              key={element.boardScheduleId}
              onClick={() => mapHandler(date, index)}
            >
              <div className={container}>
                <span className={place}>{element.placeName}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScheduleListItem;
