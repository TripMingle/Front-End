import ScheduleListItem from './ScheduleListItem';
import * as styles from '@/styles/write/thirdstep/schedule-list.css';
import { SchedulePlaceType } from '@/types/country/place';

type Props = {
  placeList: { [key: string]: SchedulePlaceType[] };
  mapHandler: (date: string, index: number) => void;
  dateArray: string[];
};

const ScheduleList = ({ placeList, mapHandler, dateArray }: Props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        {dateArray.map((date, index) => (
          <li className={styles.listItemContainer} key={date}>
            <span className={styles.listItemLine}></span>
            <ScheduleListItem
              day={index + 1}
              date={date}
              data={placeList[date]}
              mapHandler={mapHandler}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
