import * as country from '@/styles/country/page.css';
import * as styles from '@/styles/country/board/page.css';
import CountryBackground from '@/components/country/CountryBackground';
import BoardList from '@/components/country/board/BoardList';
import CountryWrite from '@/components/common/CountryWrite';

const Page = async ({
  params,
  searchParams,
}: {
  params: { country: string };
  searchParams: { page: string };
}) => {
  return (
    <>
      <CountryBackground country={params.country} />
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
        <BoardList country={params.country} page={searchParams.page || '1'} />
      </div>
      <CountryWrite type="board" />
    </>
  );
};

export default Page;
