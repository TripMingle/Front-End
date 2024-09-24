import { useCallback, useEffect, useRef, useState } from 'react';
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  OverlayView,
} from '@react-google-maps/api';
import * as styles from '@/styles/write/thirdstep/map-component.css';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';
import { SchedulePlaceType } from '@/types/country/place';
import MapMarker from './MapMarker';

type Props = {
  placeList: { [key: string]: SchedulePlaceType[] };
  date: string;
  index: number;
};

const MapComponent = ({ placeList, date, index }: Props) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [countryCenter, setCountryCenter] = useState<google.maps.LatLngLiteral>(
    { lat: 0, lng: 0 },
  );
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  const [markers, setMarkers] = useState<google.maps.LatLngLiteral[]>([]);
  const [zoom, setZoom] = useState<number>(6);

  const { watch } = useFormContext<BoardForm>();
  const country = watch('countryName');

  const onLoad = useCallback((map: google.maps.Map) => {
    getCountryLocation();
    mapRef.current = map;
  }, []);

  const defaultMapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const getCountryLocation = () => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: country }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const location = results[0].geometry.location;
        setCountryCenter({
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
  }, [date, placeList[date]]);

  useEffect(() => {
    let zoom = 15;
    let lat = countryCenter.lat;
    let lng = countryCenter.lng;

    if (index === -1) {
      // 지도 버튼 클릭했을 때 index = -1
      index = 0;
      zoom = 6;
    }

    if (placeList[date] !== undefined) {
      if (placeList[date][index]) {
        lat = placeList[date][index].pointX;
        lng = placeList[date][index].pointY;
      } else {
        zoom = 6;
      }
    }
    setZoom(zoom);
    setCenter({ lat, lng });
  }, [date, index]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setZoom(zoom);
    }
  }, [zoom]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo(center);
    }
  }, [center]);

  return (
    <div className={styles.mapConatiner}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={countryCenter}
        zoom={6}
        onLoad={onLoad}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        }}
      >
        {markers.map((marker, index) => (
          <OverlayView
            key={index}
            position={marker}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <MapMarker index={index} />
          </OverlayView>
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
