import { useCallback, useEffect, useState } from 'react';
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
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { SchedulePlaceType } from '@/types/country/place';

const TripScheduleList = () => {
  // TODO :: 일정 추가 페이지 완료 시 변경
  // const { watch, setValue } = useFormContext<BoardForm>();
  // const startDate = watch('startDate')
  // const endDate = watch('endDate)
  const startDate = '2024-03-24';
  const endDate = '2024-03-27';

  const [dateArray, setDateArray] = useState<string[]>([]);
  const [placeList, setPlaceList] = useState<{
    [key: string]: SchedulePlaceType[];
  }>({});

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

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
      setPlaceList((prev) => ({
        ...prev,
        [source.droppableId]: newArray,
      }));
    } else {
      const newSourceArray = Array.from(placeList[source.droppableId] || []);
      const [movedItem] = newSourceArray.splice(source.index, 1);
      const newDestinationArray = Array.from(
        placeList[destination.droppableId] || [],
      );
      newDestinationArray.splice(destination.index, 0, movedItem);

      setPlaceList((prev) => ({
        ...prev,
        [source.droppableId]: newSourceArray,
        [destination.droppableId]: newDestinationArray,
      }));
    }
  };

  useEffect(() => {
    const result = getDateInRange(startDate, endDate);
    setDateArray(result);
    result.forEach((e, i) => {
      // TODO:: 날짜마다 빈 배열로 초기화, 잠시 테스트를 위해 목업 데이터 tmp 넣어두기
      if (i === 0) {
        const tmp: SchedulePlaceType[] = [
          {
            id: 1231,
            placeName: 'Golden Gate Bridge',
            pointX: 37.8199,
            pointY: -122.4783,
            googlePlaceId: 'ChIJiQHsW0mAhYARmWQwLt1iD9g',
          },
          {
            id: 23,
            placeName: 'Eiffel Tower',
            pointX: 48.8584,
            pointY: 2.2945,
            googlePlaceId: 'ChIJLU7jZClu5kcR4PcOOO6p3I0',
          },
          {
            id: 11,
            placeName: 'Sydney Opera House',
            pointX: -33.8568,
            pointY: 151.2153,
            googlePlaceId: 'ChIJ3S-JXmauEmsRUcIaWtf4MzE',
          },
        ];
        setPlaceList((prev) => {
          return { ...prev, [e]: tmp };
        });
      } else {
        setPlaceList((prev) => {
          return { ...prev, [e]: [] };
        });
      }
    });
  }, []);

  return (
    <div className={listContainer}>
      <span className={listLine}></span>
      <DragDropContext onDragEnd={onDragEnd}>
        <ul className={listItemContainer}>
          {dateArray.map((date, index) => (
            <li
              className={`${index === dateArray.length - 1 ? lastListItem : ''}`}
              key={date}
            >
              <TripSchedule
                day={index + 1}
                date={date}
                data={placeList[date]}
              />
            </li>
          ))}
        </ul>
      </DragDropContext>
    </div>
  );
};

export default TripScheduleList;
