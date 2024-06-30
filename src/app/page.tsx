import Navbar from '@/components/navbar/Navbar';
import '../styles/font.css';
import * as styles from './page.css';
import SearchBox from './searchBox';

export default function Home() {
  return (
    <main>
      <Navbar bg={false} />
      <div className={styles.bgContainer}>
        <img className={styles.bg} src="/mainbg.png" alt="mainBackground" />
        <SearchBox />
      </div>
      <div className={styles.contentContainer}>
        <img
          className={styles.airplaneIcon}
          src="/icons/airplane.svg"
          alt="airplane"
        />
        <div className={styles.textContainer}>
          <span>
            <div className={styles.primaryText}>어디로</div>
            <div className={styles.plainText}>떠나시나요?</div>
          </span>
          <span className={styles.line}> 구분선</span>
        </div>
      </div>
    </main>
  );
}
