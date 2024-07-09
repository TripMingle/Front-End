import Image from 'next/image';
import * as styles from '@/styles/components/common/board-card.css';
import { Language } from './Language';
import BookMark from './BookMark';
import Profile from './Profile';

const BoardCard = ({
  isMarked,
  language,
  title,
  startDate,
  endDate,
  currentCount,
  maxCount,
  url,
  name,
  age,
  gender,
  nationality,
}: {
  isMarked: Boolean;
  language: string;
  title: string;
  startDate: string;
  endDate: string;
  currentCount: number;
  maxCount: number;
  url: string;
  name: string;
  age: number;
  gender: Boolean;
  nationality: string;
}) => {
  const sex = gender ? '남' : '여';
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
        <Language language={language} />
        <span className={styles.title}>{title}</span>
        <div className={styles.infoContainer}>
          <Image
            className={styles.icon}
            src="/icons/calendar.svg"
            width={16}
            height={16}
            alt="calendarIcon"
          />
          <span>
            {startDate} ~ {endDate}
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
            {currentCount} / {maxCount}인
          </span>
        </div>
        <div className={styles.profileContainer}>
          <Profile url={url} width={16} height={16} />
          <span className={styles.profileInfo}>
            {name} · {age}대 · {sex} · {nationality}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
