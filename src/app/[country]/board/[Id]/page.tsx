'use client';
import Image from 'next/image';
import '@/styles/font.css';
import { WhiteHeader } from '@/components/header/Header';
import * as styles from '@/styles/country/board/id/page.css';
import TravelerCard from '@/components/country/board/id/TravelerCard';
import { Language } from '@/components/common/Language';
import TripStyleButton from '@/components/common/TripStyleButton';
import TripTypeButton from '@/components/common/TripTypeButton';
import CommentInput from '@/components/common/CommentInput';
import Comment from '@/components/common/Comment';
import { useBoardStore } from '@/store/boardStore';

const Page = () => {
  const boardDetail = useBoardStore((state) => state.boardDetail);
  return (
    <main>
      <WhiteHeader />
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={boardDetail.imageUrl || '/images/emptyBackground.png'}
            alt="boardImage"
            fill
            sizes="1920px"
          />
        </div>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <Language language={boardDetail.language} />
            <p className={styles.title}>{boardDetail.title}</p>
            <div>
              <span className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  src="/icons/user.svg"
                  width={20}
                  height={20}
                  alt="userIcon"
                />
                <span>{`${boardDetail.currentCount} / ${boardDetail.maxCount} 인`}</span>
              </span>
              <span className={styles.iconContainer}>
                <Image
                  className={styles.icon}
                  src="/icons/calendar.svg"
                  width={20}
                  height={20}
                  alt="commendIcon"
                />
                <span>{boardDetail.commentCount}</span>
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
                <span>
                  {boardDetail.startDate} ~ {boardDetail.endDate}
                </span>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.infoTitle}>내용</p>
              <div className={styles.infoContent}>{boardDetail.content}</div>
            </div>
          </div>
          <TravelerCard />
        </div>
        <div className={styles.container}>
          <div className={styles.commentContainer}>
            <p className={styles.commentTitle}>
              댓글{' '}
              <strong className={styles.commentTitleStrong}>
                {boardDetail.commentCount}
              </strong>
              개
            </p>
            <CommentInput />
            <div>
              <Comment
                url=""
                name="홍길동"
                time="1시간전"
                content="너무 참여하고 싶어용~!"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
