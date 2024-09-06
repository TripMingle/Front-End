import { Libraries, LoadScript } from '@react-google-maps/api';
import MapComponent from './MapComponent';
import TripDate from './TripDate';
import TripScheduleList from './TripScheduleList';
import { SchedulePlaceType } from '@/types/country/place';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';

const libraries: Libraries = ['places'];

type Props = {
  placeListHandler: (newPlaceList: {
    [key: string]: SchedulePlaceType[];
  }) => void;
  placeList: { [key: string]: SchedulePlaceType[] };
};

const ScheduleInput = ({ placeListHandler, placeList }: Props) => {
  const { getValues } = useFormContext<BoardForm>();
  const [mapDate, setMapDate] = useState<string>(getValues('startDate'));
  const mapDateHandler = (date: string) => {
    setMapDate(date);
  };

  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
        libraries={libraries}
      >
        <MapComponent placeList={placeList} date={mapDate} />
        <TripDate />
        <TripScheduleList
          placeListHandler={placeListHandler}
          placeList={placeList}
          mapDateHandler={mapDateHandler}
        />
      </LoadScript>
    </div>
  );
};

export default ScheduleInput;
