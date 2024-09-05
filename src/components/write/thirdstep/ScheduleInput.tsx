import { Libraries, LoadScript } from '@react-google-maps/api';
import MapComponent from './MapComponent';
import TripDate from './TripDate';
import TripScheduleList from './TripScheduleList';

const libraries: Libraries = ['places'];

const ScheduleInput = () => {
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
        libraries={libraries}
      >
        <MapComponent />
        <TripDate />
        <TripScheduleList />
      </LoadScript>
    </div>
  );
};

export default ScheduleInput;
