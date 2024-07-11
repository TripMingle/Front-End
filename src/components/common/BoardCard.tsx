import Image from 'next/image';
import * as styles from '@/styles/components/common/board-card.css';
import { Language } from './Language';
import BookMark from './BookMark';
import Profile from './Profile';
import { BoardCardProps, User } from '@/types/country/user';

const BoardCard = (props: BoardCardProps) => {
  const sex = props.user.gender ? '남' : '여';
  return (
    <div className={styles.postCard}>
      <div className={styles.imageBox}>
        <Image
          src="/images/tmp.png"
          fill
          sizes="(max-width :1023px) 160px, 255px"
          className={styles.image}
          alt="countryImage"
        />
        <BookMark isMarked={props.isMarked} />
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
          <Profile url={props.user.url} width={16} height={16} />
          <span className={styles.profileInfo}>
            {props.user.name} · {props.user.age}대 · {sex} · {props.user.nationality}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
