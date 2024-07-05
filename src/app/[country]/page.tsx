import '@/styles/font.css';
import Image from 'next/image';
import * as styles from '@/styles/country/page.css';
import BoardCard from '@/components/common/BoardCard';
import { WhiteHeader } from '@/components/header/Header';
import PostCard from '@/components/common/PostCard';
import MoveToMain from '@/components/country/MoveToMain';
import More from '@/components/common/More';

export default function Page() {
  return (
    <main>
      <WhiteHeader />
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/countrybg.png"
            alt="countryBackgroundImage"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.contentContainer}>
          <MoveToMain />
          <div className={styles.categoryContainer}>
            <Image
              src="/icons/country/person.svg"
              alt="personIcon"
              width={36}
              height={36}
            />
            <span className={styles.category}>여행 동행글</span>
            <div className={styles.textContainer}>
              <span className={styles.explain}>
                전 세계 친구들과 자유롭게 동행해 보세요!
              </span>
              <More path={'/board'} />
            </div>
            <div className={styles.postContainer}>
              <Example />
              <Example />
              <Example />
              <Example />
            </div>
          </div>
          <div className={styles.categoryContainer}>
            <Image
              src="/icons/country/good.svg"
              alt="personIcon"
              width={36}
              height={36}
            />
            <span className={styles.category}>맛집 추천</span>
            <div className={styles.textContainer}>
              <span className={styles.explain}>
                여행객들이 엄선한 맛집! 실패는 NO!
              </span>
              <More path={'/board'} />
            </div>
            <div className={styles.postContainer}>
              <Example2 />
              <Example2 />
              <Example2 />
              <Example2 />
            </div>
          </div>
          <div className={styles.categoryContainer}>
            <Image
              src="/icons/country/house.svg"
              alt="personIcon"
              width={36}
              height={36}
            />
            <span className={styles.category}>숙소 추천</span>
            <div className={styles.textContainer}>
              <span className={styles.explain}>
                여행에 쌓인 피로도 풀어야죠!
              </span>{' '}
              <More path={'/board'} />
            </div>
            <div className={styles.postContainer}>
              <Example2 />
              <Example2 />
              <Example2 />
              <Example2 />
            </div>
          </div>
          <div className={styles.categoryContainer}>
            <Image
              src="/icons/country/calendar2.svg"
              alt="personIcon"
              width={36}
              height={36}
            />
            <span className={styles.category}>일정 추천</span>{' '}
            <div className={styles.textContainer}>
              <span className={styles.explain}>
                여행 계획 막막하신가요? 따라만 오세요!
              </span>{' '}
              <More path={'/board'} />
            </div>
            <div className={styles.postContainer}>
              <Example2 />
              <Example2 />
              <Example2 />
              <Example2 />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const Example = () => {
  return (
    <BoardCard
      isMarked={false}
      language="japanese"
      title="파리에서 다이빙 할 사람"
      startDate="2024.06.13"
      endDate="2024.06.23"
      currentCount={3}
      maxCount={6}
      url=""
      name="홍길동"
      age={20}
      gender={false}
      nationality="한국"
    />
  );
};

const Example2 = () => {
  return <PostCard />;
};
