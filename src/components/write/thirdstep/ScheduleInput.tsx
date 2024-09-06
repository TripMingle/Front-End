import { Libraries, LoadScript } from '@react-google-maps/api';
import MapComponent from './MapComponent';
import TripDate from './TripDate';
import TripScheduleList from './TripScheduleList';
import { SchedulePlaceType } from '@/types/country/place';

const libraries: Libraries = ['places'];

type Props = {
  placeListHandler: (newPlaceList: {
    [key: string]: SchedulePlaceType[];
  }) => void;
  placeList: { [key: string]: SchedulePlaceType[] };
};

const ScheduleInput = ({ placeListHandler, placeList }: Props) => {
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
        libraries={libraries}
      >
        <MapComponent />
        <TripDate />
        <TripScheduleList
          placeListHandler={placeListHandler}
          placeList={placeList}
        />
      </LoadScript>
    </div>
  );
};

export default ScheduleInput;
