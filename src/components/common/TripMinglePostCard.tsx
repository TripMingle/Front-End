import Image from 'next/image';
import * as styles from '@/styles/components/common/trip-mingle-post-item.css';
import { Korean } from './Language';
import BookMark from './BookMark';
import Profile from './Profile';

const TripMinglePostCard = ({ isMarked }: { isMarked: Boolean }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.imageBox}>
        <Image
          src="/images/tmp.png"
          layout="fill"
          objectFit="cover"
          className={styles.image}
          alt="countryImage"
        />
        <BookMark isMarked={isMarked} />
      </div>
      <div className={styles.contentContainer}>
        <Korean />
        <span className={styles.title}>서울 청계천 같이 걸어요~</span>
        <div className={styles.infoContainer}>
          <Image
            className={styles.icon}
            src="/icons/calendar.svg"
            width={16}
            height={16}
            alt="calendarIcon"
          />
          <span>2023.06.14 ~ 2023.06.15</span>
        </div>
        <div className={styles.infoContainer}>
          <Image
            className={styles.icon}
            src="/icons/user.svg"
            width={16}
            height={16}
            alt="userIcon"
          />
          <span>2 / 5인</span>
        </div>
        <div className={styles.profileContainer}>
          <Profile url="" width={24} height={24} />{' '}
          <span className={styles.profileInfo}>홍길동·20대·남</span>
        </div>
      </div>
    </div>
  );
};

export default TripMinglePostCard;
