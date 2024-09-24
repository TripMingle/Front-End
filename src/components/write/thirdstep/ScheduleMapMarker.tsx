import Image from 'next/image';
import * as styles from '@/styles/write/thirdstep/schedule-map.css';

const ScheduleMapMarker = ({ index }: { index: number }) => {
  return (
    <div className={styles.markerContainer}>
      <Image
        className={styles.markerIcon}
        src="/icons/map_marker.svg"
        width={48}
        height={48}
        alt="marker"
      />
      <span className={styles.markerNumber}>{index + 1}</span>
    </div>
  );
};

export default ScheduleMapMarker;
