'use client';
import Image from 'next/image';
import '@/styles/font.css';
import { useEffect, useState } from 'react';
import { WhiteHeader } from '@/components/header/Header';
import * as styles from '@/styles/country/board/id/page.css';
import TravelerCard from '@/components/country/board/id/TravelerCard';
import { Language } from '@/components/common/Language';
import CommentInput from '@/components/common/CommentInput';
import ChatModal from '@/components/country/board/id/ChatModal';
import CommentList from '@/components/common/CommentList';
import { usePathname } from 'next/navigation';
import { getBoardDetail } from '@/api/getBoard';
import { BoardDetailType } from '@/types/country/board';
import { initialBoardDetail } from '@/store/boardStore';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [boardDetail, setBoardDetail] =
    useState<BoardDetailType>(initialBoardDetail);
  const pathname = usePathname();

  const getBoardId = () => {
    const idx = pathname.lastIndexOf('/');
    return Number(pathname.slice(idx + 1));
  };

  const getBoardData = async () => {
    const boardId = getBoardId();
    const data = await getBoardDetail(boardId);
    setBoardDetail(data.data);
  };

  useEffect(() => {
    getBoardData();
  }, []);

  const chatHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <WhiteHeader />
      <ChatModal
        isOpen={isOpen}
        nickName={boardDetail.nickName}
        userId={boardDetail.userId}
        chatHandler={chatHandler}
      />
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
                  src="/icons/comment.svg"
                  width={20}
                  height={20}
                  alt="commendIcon"
                />
                <span>{boardDetail.commentCount}</span>
              </span>
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.infoTitle}>여행 스타일</p>
              <div className={styles.infoItem}></div>
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.infoTitle}>여행 타입</p>
              <div className={styles.infoItem}></div>
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
          <TravelerCard
            props={{
              userImageUrl: boardDetail.userImageUrl,
              nickName: boardDetail.nickName,
              ageRange: boardDetail.ageRange,
              gender: boardDetail.gender,
              nationality: boardDetail.nationality,
              selfIntroduction: boardDetail.selfIntroduction ?? '',
            }}
            chatHandler={chatHandler}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.commentContainer}>
            <p className={styles.commentTitle}>
              {'댓글 '}
              <strong className={styles.commentTitleStrong}>
                {boardDetail.commentCount}
              </strong>
              {' 개'}
            </p>
            <CommentInput
              boardId={boardDetail.boardId}
              inputHandler={getBoardData}
            />
            <CommentList comments={boardDetail.boardComments} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
