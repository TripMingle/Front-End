import Profile from '@/components/common/Profile';
import * as styles from '@/styles/country/board/id/traveler-card.css';
import Image from 'next/image';
import ChatButton from './ChatButton';

const TravelerCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.travelerTitle}>
        <Image src="/icons/flag.svg" width={24} height={24} alt="flagIcon" />
        여행장
      </div>
      <div className={styles.profileContainer}>
        <Profile url="" width={42} height={42} />
        <div className={styles.mobileProfileInfo}>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>홍길동</span>
            <span>20대 . 남 . 한국</span>
          </div>
          <span className={styles.mobileInfoContent}>
            여행을 좋아하는 20대 대학생 입니다.
          </span>
        </div>
        <span className={styles.mobileInfoContent}>별 네개</span>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.infoTitle}>자기소개</span>
        <span className={styles.infoContent}>
          여행을 좋아하는 20대 대학생 입니다.
        </span>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.infoTitle}>동행 평점</span>
        <span className={styles.infoContent}>별 네개</span>
      </div>
      <ChatButton />
    </div>
  );
};

export default TravelerCard;
