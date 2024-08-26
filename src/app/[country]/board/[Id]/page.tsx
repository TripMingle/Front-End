'use client';
import Image from 'next/image';
import '@/styles/font.css';
import { useEffect, useState } from 'react';
import Header from '@/components/header/Header';
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
import { TripTypeButton } from '@/components/common/TripTypeButton';
import AttributeBox from '@/components/country/board/id/AttributeBox';
import LoginModal from '@/components/common/LoginModal';
import { useUserStore } from '@/store/userStore';
import useModal from '@/hooks/useModal';

const Page = () => {
  const [boardDetail, setBoardDetail] =
    useState<BoardDetailType>(initialBoardDetail);
  const pathname = usePathname();

  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const { isOpen, openModal, closeModal } = useModal();

  const getBoardId = () => {
    const idx = pathname.lastIndexOf('/');
    return Number(pathname.slice(idx + 1));
  };

  const getBoardData = async () => {
    const boardId = getBoardId();
    const data = await getBoardDetail(boardId);
    setBoardDetail(data.data);
  };

  const hasTripStyle = () => {
    if (boardDetail.preferGender !== 3) return true;
    if (boardDetail.preferSmoking !== 3) return true;
    if (boardDetail.preferBudget !== 3) return true;
    if (boardDetail.preferPhoto !== 3) return true;
    if (boardDetail.preferDrink !== 3) return true;
    return false;
  };

  useEffect(() => {
    getBoardData();
  }, []);

  return (
    <main>
      <Header />
      {isLoggedIn ? (
        <ChatModal
          isOpen={isOpen}
          nickName={boardDetail.nickName}
          userId={boardDetail.userId}
          closeModal={closeModal}
        />
      ) : (
        <LoginModal isOpen={isOpen} closeModal={closeModal} />
      )}
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
            {hasTripStyle() ? (
              <div className={styles.infoContainer}>
                <p className={styles.infoTitle}>동행자 특성</p>
                <div className={styles.infoItem}>
                  <AttributeBox
                    props={{
                      preferGender: boardDetail.preferGender,
                      preferSmoking: boardDetail.preferSmoking,
                      preferBudget: boardDetail.preferBudget,
                      preferPhoto: boardDetail.preferPhoto,
                      preferDrink: boardDetail.preferDrink,
                    }}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
            {boardDetail.tripType.length ? (
              <div className={styles.infoContainer}>
                <p className={styles.infoTitle}>동행 타입</p>
                <div className={styles.infoItem}>
                  {boardDetail.tripType.map((type) => (
                    <TripTypeButton
                      key={type}
                      isButton={false}
                      isSelected={true}
                      type={type}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
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
            openModal={openModal}
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
              isOpen={isOpen}
              openModal={openModal}
            />
            <CommentList comments={boardDetail.boardComments} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
