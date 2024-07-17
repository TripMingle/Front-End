import Profile from '@/components/common/Profile';
import * as styles from '@/styles/country/board/id/traveler-card.css';
import Image from 'next/image';
import ChatButton from './ChatButton';
import { useBoardStore } from '@/store/boardStore';

const TravelerCard = ({ chatHandler }: { chatHandler: () => void }) => {
  const boardDetail = useBoardStore((state) => state.boardDetail);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.travelerTitle}>
        <Image src="/icons/flag.svg" width={24} height={24} alt="flagIcon" />
        여행장
      </div>
      <div className={styles.profileContainer}>
        <Profile
          url={boardDetail.userImageUrl}
          width={42}
          height={42}
          changeWidth={72}
          changeHeight={72}
        />
        <div className={styles.mobileProfileInfo}>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>{boardDetail.nickName}</span>
            <span>
              {boardDetail.ageRange.slice(0, 2)}대 .{' '}
              {boardDetail.gender === 'male' ? '남' : '여'} .{' '}
              {boardDetail.nationality}
            </span>
          </div>
          <span className={styles.mobileInfoContent}>
            {boardDetail.selfIntroduction}
          </span>
        </div>
        <span className={styles.mobileInfoContent}>별 네개</span>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.infoTitle}>자기소개</span>
        <span className={styles.infoContent}>
          {boardDetail.selfIntroduction}
        </span>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.infoTitle}>동행 평점</span>
        <span className={styles.infoContent}>별 네개</span>
      </div>
      <ChatButton chatHandler={chatHandler} />
    </div>
  );
};

export default TravelerCard;
