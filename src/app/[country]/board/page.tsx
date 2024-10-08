import '@/styles/font.css';
import * as country from '@/styles/country/page.css';
import * as styles from '@/styles/country/board/page.css';
import Header from '@/components/header/Header';
import CountryBackground from '@/components/country/CountryBackground';
import BoardList from '@/components/country/board/BoardList';
import CountryWrite from '@/components/common/CountryWrite';

const Page = () => {
  return (
    <main>
      <Header />
      <div className={country.pageContainer}>
        <CountryBackground />
        <div className={styles.bgOverlay}>
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
          <BoardList />
        </div>
      </div>
      <CountryWrite type="board" />
    </main>
  );
};

export default Page;
