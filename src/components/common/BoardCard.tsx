import Image from 'next/image';
import * as styles from '@/styles/components/common/board-card.css';
import { Language } from './Language';
import BookMark from './BookMark';
import Profile from './Profile';
import { BoardPreviewProps } from '@/types/country/board';
import { usePathname, useRouter } from 'next/navigation';

const BoardCard = ({ props }: { props: BoardPreviewProps }) => {
  const router = useRouter();
  const pathname = usePathname();

  const clickHandler = async () => {
    if (pathname.indexOf('board') === -1)
      router.push(pathname + `/board/${props.boardId}`);
    else router.push(pathname + `/${props.boardId}`);
  };

  return (
    <div className={styles.boardCard} onClick={clickHandler}>
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
            ${props.gender === 'male' ? '남' : '여'} · ${props.nationality}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
