import Image from 'next/image';
import '@/styles/font.css';
import * as country from '@/styles/country/page.css';
import * as styles from '@/styles/board/page.css';
import { WhiteHeader } from '@/components/header/Header';
import BoardCard from '@/components/common/BoardCard';
import MoveToMain from '@/components/country/MoveToMain';

const Page = () => {
  return (
    <main>
      <WhiteHeader />
      <div className={country.pageContainer}>
        <div className={country.imageContainer}>
          <Image
            className={country.image}
            src="/images/countrybg.png"
            alt="countryBackgroundImage"
            fill
            sizes="1920px"
          />
          <div className={styles.bgOverlay}></div>
          <div className={styles.mapContainer}>
            <span className={styles.mapText}>
              지도를 통해
              <br />
              주위 동행을 찾아보세요!
            </span>
            <button className={styles.mapButton}>{'지도로 동행 찾기 >'}</button>
          </div>
        </div>
        <div className={country.contentContainer}>
          <MoveToMain country={'중국'} />
          <div className={styles.plain}>
            <span className={styles.highlight}>{'165'}</span>
            <span>
              개의 동행이
              <br />
              기다리고 있어요!
            </span>
          </div>
          <div className={country.boardContainer}>
            {/* TODO : 한 페이지당 동행 게시물 최대 16개, 웹 : 페이지 버튼 형식 */}
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;

// 
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
      user={exmapleUser}
    />
  );
};

const exmapleUser = {
  url: '',
  name: '홍길동',
  age: 20,
  gender: false,
  nationality: '한국',
};
