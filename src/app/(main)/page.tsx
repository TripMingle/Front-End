import '@/styles/font.css';
import * as styles from '@/styles/main/page.css';
import Image from 'next/image';
import { Header } from '@/components/header/Header';
import SearchBox from '@/components/main/SearchBox';
import SelectContent from '@/components/main/SelectContent';

const Page = () => {
  return (
    <main>
      <Header />
      <div className={styles.bgContainer}>
        <Image
          className={styles.bg}
          src="/images/mainbg.png"
          fill
          sizes="1920px"
          alt="mainBackground"
        />
        <SearchBox />
      </div>
      <div className={styles.contentContainer}>
        <Image
          className={styles.airplaneIcon}
          width={32}
          height={32}
          src="/icons/airplane.svg"
          alt="airplane"
        />
        <div className={styles.textContainer}>
          <div>
            <span className={styles.primaryText}>어디로</span>
            <span className={styles.plainText}>떠나시나요?</span>
          </div>
          <span className={styles.line}></span>
        </div>
        <SelectContent />
      </div>
    </main>
  );
};

export default Page;
