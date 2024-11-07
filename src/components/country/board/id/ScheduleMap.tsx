import { useCallback, useEffect, useRef, useState } from 'react';
import {
  GoogleMap,
  Libraries,
  LoadScript,
  OverlayView,
} from '@react-google-maps/api';
import { SchedulePlaceType } from '@/types/country/place';
import ScheduleMapMarker from '@/components/write/board/thirdstep/ScheduleMapMarker';
import { mapContainer } from '@/styles/country/board/id/schedule-modal.css';

type Props = {
  placeList: { [key: string]: SchedulePlaceType[] };
  date: string;
  index: number;
  country: string;
};

const libraries: Libraries = ['places'];

const ScheduleMap = ({ placeList, date, index, country }: Props) => {
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
    // 나라 중심으로 처음에 지도 설정
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
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
      libraries={libraries}
    >
      <div className={mapContainer}>
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
              <ScheduleMapMarker index={index} />
            </OverlayView>
          ))}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default ScheduleMap;
