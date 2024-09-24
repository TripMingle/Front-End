import { Libraries, LoadScript } from '@react-google-maps/api';
import ScheduleMap from './ScheduleMap';
// import ScheduleDate from './ScheduleDate';
import ScheduleList from './ScheduleList';
import { SchedulePlaceType } from '@/types/country/place';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';
import { scheduleInputContainer } from '@/styles/write/thirdstep/schedule-list.css';

const libraries: Libraries = ['places'];

type Props = {
  placeListHandler: (newPlaceList: {
    [key: string]: SchedulePlaceType[];
  }) => void;
  placeList: { [key: string]: SchedulePlaceType[] };
};

const ScheduleForm = ({ placeListHandler, placeList }: Props) => {
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
        <ScheduleMap
          placeList={placeList}
          date={mapCenterDate}
          index={mapCenterIndex}
        />
        <ScheduleList
          placeListHandler={placeListHandler}
          placeList={placeList}
          mapHandler={mapHandler}
        />
      </LoadScript>
    </div>
  );
};

export default ScheduleForm;
