import * as styles from '@/styles/write/thirdstep/place-result-item.css';
import { SchedulePlaceType } from '@/types/country/place';
import Image from 'next/image';

type Props = {
  place: SchedulePlaceType;
};

const PlaceResultItem = ({ place }: Props) => {
  console.log(place);
  return (
    <div className={styles.container}>
      <Image
        src={place.imageUrl}
        className={styles.placePhoto}
        width={64}
        height={64}
        alt="placeImage"
      />
      <div className={styles.infoContainer}>
        <p className={styles.placeName}>{place.placeName}</p>
        <p className={styles.placeAddress}>{place.address}</p>
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
