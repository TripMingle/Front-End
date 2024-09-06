import { useCallback, useEffect, useState } from 'react';
import { BoardForm } from '@/types/country/board';
import { useFormContext } from 'react-hook-form';
import { getDateInRange } from '@/utils/date';
import TripSchedule from './TripSchedule';
import * as styles from '@/styles/write/thirdstep/trip-schedule-list.css';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { SchedulePlaceType } from '@/types/country/place';

type Props = {
  placeList: { [key: string]: SchedulePlaceType[] };
  placeListHandler: (newPlaceList: {
    [key: string]: SchedulePlaceType[];
  }) => void;
  mapHandler: (date: string, index: number) => void;
};

const TripScheduleList = ({
  placeList,
  placeListHandler,
  mapHandler,
}: Props) => {
  const { watch } = useFormContext<BoardForm>();
  // const startDate = watch('startDate');
  // const endDate = watch('endDate');

  const startDate = '2023-09-24';
  const endDate = '2023-09-27';

  const [dateArray, setDateArray] = useState<string[]>([]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      source.index === destination.index
    )
      return;
    if (source.droppableId === destination.droppableId) {
      const newArray = Array.from(placeList[source.droppableId] || []);
      const [movedItem] = newArray.splice(source.index, 1);

      newArray.splice(destination.index, 0, movedItem);
      const newPlaceList = { [source.droppableId]: newArray };

      placeListHandler(newPlaceList);
    } else {
      const newSourceArray = Array.from(placeList[source.droppableId] || []);
      const [movedItem] = newSourceArray.splice(source.index, 1);

      const newDestinationArray = Array.from(
        placeList[destination.droppableId] || [],
      );
      newDestinationArray.splice(destination.index, 0, movedItem);
      const newPlaceList = {
        [source.droppableId]: newSourceArray,
        [destination.droppableId]: newDestinationArray,
      };

      placeListHandler(newPlaceList);
    }
  };

  useEffect(() => {
    const result = getDateInRange(startDate, endDate);
    setDateArray(result);
    const newPlaceList: { [key: string]: [] } = {};
    // TODO:: 날짜바꾸면 모두 다시 빈배열로 바꿀지, 아니면 이전에 해당 날짜에 넣어놓은 데이터는 냅둘지 고민
    // 모두 빈배열로 바꾸고 싶다면 if문 제거하고 그냥 newPlaceList[e] = [] 적용
    result.forEach((e) => {
      if (!placeList[e]) newPlaceList[e] = [];
    });
    placeListHandler(newPlaceList);
  }, [startDate, endDate]);

  return (
    <>
      <div className={styles.container}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ul className={styles.listContainer}>
            {dateArray.map((date, index) => (
              <li className={styles.listItemContainer} key={date}>
                <span className={styles.listItemLine}></span>
                <TripSchedule
                  day={index + 1}
                  date={date}
                  data={placeList[date]}
                  placeListHandler={placeListHandler}
                  mapHandler={mapHandler}
                />
              </li>
            ))}
          </ul>
        </DragDropContext>
      </div>
    </>
  );
};

export default TripScheduleList;
