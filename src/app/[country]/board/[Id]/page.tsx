import Image from 'next/image';
import '@/styles/font.css';
import { WhiteHeader } from '@/components/header/Header';
import * as styles from '@/styles/country/board/id/page.css';
import TravelerCard from '@/components/country/board/id/TravelerCard';
import { Language } from '@/components/common/Language';
import TripStyleButton from '@/components/common/TripStyleButton';
import TripTypeButton from '@/components/common/TripTypeButton';

const Page = () => {
  return (
    <main>
      <WhiteHeader />
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/images/tmp.png"
            alt="boardImage"
            fill
            sizes="1920px"
          />
        </div>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <Language language="korean" />
            <p className={styles.title}>오늘 청계천 같이 걸어요~</p>
            <div>
              <span className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  src="/icons/user.svg"
                  width={20}
                  height={20}
                  alt="userIcon"
                />
                {'2 / 5 인'}
              </span>
              <span className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  src="/icons/calendar.svg"
                  width={20}
                  height={20}
                  alt="commendIcon"
                />
                {'3'}
              </span>
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.infoTitle}>여행 스타일</p>
              <div className={styles.infoItem}>
                <TripStyleButton
                  isButton={false}
                  isSelected={true}
                  type="nonSmoke"
                />
                <TripStyleButton
                  isButton={false}
                  isSelected={true}
                  type="shopping"
                />
                <TripStyleButton
                  isButton={false}
                  isSelected={true}
                  type="photo"
                />
              </div>
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.infoTitle}>여행 타입</p>
              <div className={styles.infoItem}>
                <TripTypeButton
                  isButton={false}
                  isSelected={true}
                  type="couple"
                />
                <TripTypeButton isButton={false} isSelected={true} type="bed" />
              </div>
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.infoTitle}>여행 일정</p>
              <div className={styles.infoContent}>
                <span>2023.06.14 ~ 2023.06.15</span>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.infoTitle}>내용</p>
              <div className={styles.infoContent}>
                {
                  '서울 청계천 같이 걸으실 분 구해요~!\n요즘 날씨도 좋고 청계천 걷기 딱 좋은 날씨더라고요.\n\n청계천 걷고 주변 팝업스토어 가서 쇼핑도 할 생각이에요!\n\n인스타 인증샷도 남기려고요!5분만 모집합니다!연락 주세요~!'
                }
              </div>
            </div>
          </div>
          <TravelerCard />
        </div>
      </div>
    </main>
  );
};

export default Page;
