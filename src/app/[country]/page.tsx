import '@/styles/font.css';
import Image from 'next/image';
import * as styles from '@/styles/country/page.css';
import TripMinglePostCard from '@/components/common/TripMinglePostCard';
import { WhiteHeader } from '@/components/header/Header';

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
          <span>{'아시아 > 중국'}</span>
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
              <span className={styles.more}>{'더보기 >'}</span>
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
            <span className={styles.explain}>
              여행객들이 엄선한 맛집! 실패는 NO!
            </span>
          </div>
          <div className={styles.categoryContainer}>
            <Image
              src="/icons/country/house.svg"
              alt="personIcon"
              width={36}
              height={36}
            />
            <span className={styles.category}>숙소 추천</span>
            <span className={styles.explain}>여행에 쌓인 피로도 풀어야죠!</span>
          </div>
          <div className={styles.categoryContainer}>
            <Image
              src="/icons/country/calendar2.svg"
              alt="personIcon"
              width={36}
              height={36}
            />
            <span className={styles.category}>일정 추천</span>
            <span className={styles.explain}>
              여행 계획 막막하신가요? 따라만 오세요!
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

const Example = () => {
  return (
    <TripMinglePostCard
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
