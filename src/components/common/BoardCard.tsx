import * as styles from '@/styles/components/common/board-card.css';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from './Language';
import BookMark from './BookMark';
import Profile from './Profile';
import { BoardPreviewProps } from '@/types/country/board';

const BoardCard = async ({
  country,
  props,
}: {
  country: string;
  props: BoardPreviewProps;
}) => {
  return (
    <Link href={`/${country}/board/${props.boardId}`}>
      <div className={styles.boardCard}>
        <div className={styles.imageBox}>
          <Image
            src={props.imageUrl}
            width={160}
            height={255}
            className={styles.image}
            alt="countryImage"
          />
          <BookMark isMarked={props.bookMarked} />
        </div>
        <div className={styles.contentContainer}>
          <Language language={props.language} />
          <span className={styles.title}>{props.title}</span>
          <div className={styles.infoContainer}>
            <Image
              className={styles.icon}
              src="/icons/calendar.svg"
              width={16}
              height={16}
              alt="calendarIcon"
            />
            <span>
              {props.startDate} ~ {props.endDate}
            </span>
          </div>
          <div className={styles.infoContainer}>
            <Image
              className={styles.icon}
              src="/icons/user.svg"
              width={16}
              height={16}
              alt="userIcon"
            />
            <span>
              {props.currentCount} / {props.maxCount}인
            </span>
          </div>
          <div className={styles.profileContainer}>
            <Profile
              url={props.userImageUrl}
              width={16}
              height={16}
              changeWidth={24}
              changeHeight={24}
            />
            <span className={styles.profileInfo}>
              {`${props.nickName} · ${props.ageRange.slice(0, 2)}대 · 
            ${props.gender === 'male' ? '남' : '여'}`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BoardCard;
