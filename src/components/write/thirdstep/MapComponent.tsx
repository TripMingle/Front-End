import { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import * as styles from '@/styles/write/thirdstep/map-component.css';

const MapComponent = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  const onLoad = useCallback((map: google.maps.Map) => {
    setCenter({ lat: 37.7749, lng: -122.4194 });
    mapRef.current = map;
  }, []);

  const defaultMapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.mapConatiner}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
      />
    </div>
  );
};

export default MapComponent;
