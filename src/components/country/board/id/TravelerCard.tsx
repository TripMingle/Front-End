import Profile from '@/components/common/Profile';
import * as styles from '@/styles/country/board/id/traveler-card.css';
import Image from 'next/image';
import ChatButton from './ChatButton';

type Props = {
  userImageUrl: string;
  nickName: string;
  userId: number;
  ageRange: string;
  gender: string;
  nationality: string;
  selfIntroduction: string;
};

// TODO: // OpenModal props

const TravelerCard = ({
  props,
  title = '여행장',
  type = 'board',
}: {
  props: Props;
  title?: string;
  type?: string;
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.travelerTitle}>
        <Image src="/icons/flag.svg" width={24} height={24} alt="flagIcon" />
        {title}
      </div>
      <div className={styles.profileContainer}>
        <Profile
          url={props.userImageUrl}
          width={42}
          height={42}
          changeWidth={72}
          changeHeight={72}
        />
        <div className={styles.mobileProfileInfo}>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>{props.nickName}</span>
            <span>
              {`${props.ageRange.slice(0, 2)}대 · 
              ${props.gender === 'male' ? '남' : '여'} · 
              ${props.nationality}`}
            </span>
          </div>
          <span className={styles.mobileInfoContent}>
            {props.selfIntroduction}
          </span>
        </div>
        <span className={styles.mobileInfoContent}>별 네개</span>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.infoTitle}>자기소개</span>
        <span className={styles.infoContent}>{props.selfIntroduction}</span>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.infoTitle}>동행 평점</span>
        <span className={styles.infoContent}>별 네개</span>
      </div>
      {type == 'board' ? (
        <ChatButton nickName={props.nickName} userId={props.userId} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TravelerCard;
