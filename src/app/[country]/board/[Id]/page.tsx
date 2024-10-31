import Image from 'next/image';
import '@/styles/font.css';
import Header from '@/components/header/Header';
import * as styles from '@/styles/country/board/id/page.css';
import TravelerCard from '@/components/country/board/id/TravelerCard';
import { Language } from '@/components/common/Language';
import CommentInput from '@/components/common/CommentInput';
import CommentList from '@/components/common/CommentList';
import { TripTypeButton } from '@/components/common/TripTypeButton';
import AttributeBox from '@/components/country/board/id/AttributeBox';
import { BoardDetailType } from '@/types/country/board';
import { headers } from 'next/headers';

const Page = async ({ params }: { params: { id: string } }) => {
  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

  const response = await fetch(
    `${protocol}://${host}/api/board?boardId=${params.id}`,
  );

  console.log(`${protocol}://${host}/api/board?boardId=${params.id}`);
  const boardData = await response.json();

  const boardDetail: BoardDetailType = boardData.data;

  const hasTripStyle = () => {
    if (boardDetail.preferGender !== 3) return true;
    if (boardDetail.preferSmoking !== 3) return true;
    if (boardDetail.preferBudget !== 3) return true;
    if (boardDetail.preferPhoto !== 3) return true;
    if (boardDetail.preferDrink !== 3) return true;
    return false;
  };

  return (
    <main>
      <Header />
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
              userId: boardDetail.userId,
              ageRange: boardDetail.ageRange,
              gender: boardDetail.gender,
              nationality: boardDetail.nationality,
              selfIntroduction: boardDetail.selfIntroduction ?? '',
            }}
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
            <CommentInput boardId={boardDetail.boardId} />
            <CommentList comments={boardDetail.boardComments} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
