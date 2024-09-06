import { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, MarkerClusterer } from '@react-google-maps/api';
import * as styles from '@/styles/write/thirdstep/map-component.css';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';
import { SchedulePlaceType } from '@/types/country/place';

type Props = {
  placeList: { [key: string]: SchedulePlaceType[] };
  date: string;
};

const MapComponent = ({ placeList, date }: Props) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [markers, setMarkers] = useState<google.maps.LatLngLiteral[]>([]);

  const { watch } = useFormContext<BoardForm>();
  // const country = watch('countryName');

  const onLoad = useCallback((map: google.maps.Map) => {
    getCountryLocation();
    mapRef.current = map;
  }, []);

  const defaultMapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const getCountryLocation = () => {
    const country = 'France';
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: country }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const location = results[0].geometry.location;
        setCenter({
          lat: location.lat(),
          lng: location.lng(),
        });
      } else {
        console.error('Geocode failed: ' + status);
      }
    });
  };

  useEffect(() => {
    if (placeList[date] !== undefined) {
      const dateMarkers = placeList[date].map((e) => {
        return { lat: e.pointX, lng: e.pointY };
      });
      setMarkers(dateMarkers);
    }
  }, [date]);

  return (
    <div className={styles.mapConatiner}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            icon={{
              url: '/icons/map_marker.svg',
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
