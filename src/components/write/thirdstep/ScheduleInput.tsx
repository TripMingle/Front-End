import { Libraries, LoadScript } from '@react-google-maps/api';
import MapComponent from './MapComponent';
import TripDate from './TripDate';
import TripScheduleList from './TripScheduleList';
import { SchedulePlaceType } from '@/types/country/place';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';
import { scheduleInputContainer } from '@/styles/write/thirdstep/trip-schedule-list.css';

const libraries: Libraries = ['places'];

type Props = {
  placeListHandler: (newPlaceList: {
    [key: string]: SchedulePlaceType[];
  }) => void;
  placeList: { [key: string]: SchedulePlaceType[] };
};

const ScheduleInput = ({ placeListHandler, placeList }: Props) => {
  const { getValues } = useFormContext<BoardForm>();
  const [mapCenterDate, setMapCenterDate] = useState<string>(
    getValues('startDate'),
  );
  const [mapCenterIndex, setMapCenterIndex] = useState<number>(-1);
  const mapHandler = (date: string, index: number) => {
    setMapCenterDate(date);
    setMapCenterIndex(index);
  };

  return (
    <div className={scheduleInputContainer}>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
        libraries={libraries}
      >
        <MapComponent
          placeList={placeList}
          date={mapCenterDate}
          index={mapCenterIndex}
        />
        {/* <TripDate />
        TODO::여행 일정 들어가면 화면 차지가 너무 커서 일단 뺐음. */}
        <TripScheduleList
          placeListHandler={placeListHandler}
          placeList={placeList}
          mapHandler={mapHandler}
        />
      </LoadScript>
    </div>
  );
};

export default ScheduleInput;
