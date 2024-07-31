import '@/styles/font.css';
import * as country from '@/styles/country/page.css';
import * as styles from '@/styles/country/board/page.css';
import { WhiteHeader } from '@/components/header/Header';
import MoveToMain from '@/components/country/MoveToMain';
import CountryBackground from '@/components/country/CountryBackground';
import BoardList from '@/components/country/board/BoardList';
import CountryWrite from '@/components/common/CountryWrite';

const Page = () => {
  return (
    <main>
      <WhiteHeader />
      <div className={country.pageContainer}>
        <div className={country.imageContainer}>
          <CountryBackground />
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
          <MoveToMain />
          <BoardList />
        </div>
      </div>
      <CountryWrite />
    </main>
  );
};

export default Page;
