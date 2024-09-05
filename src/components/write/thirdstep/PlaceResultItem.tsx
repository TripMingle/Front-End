import * as styles from '@/styles/write/thirdstep/place-result-item.css';
import { SchedulePlaceType } from '@/types/country/place';
import Image from 'next/image';

type Props = {
  place: SchedulePlaceType;
};

const PlaceResultItem = ({ place }: Props) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.placePhoto}
        src=""
        width={24}
        height={24}
        alt="placeImage"
      />
      <div className={styles.infoContainer}>
        <p className={styles.placeName}>{place.placeName}</p>
        <p className={styles.placeAddress}>주소</p>
      </div>
      <button className={styles.selectContainer({ select: true })}>
        <Image
          className={styles.selectIcon}
          src="/icons/w_check.svg"
          width={8}
          height={7}
          alt="selectIcon"
        />
      </button>
    </div>
  );
};

export default PlaceResultItem;
