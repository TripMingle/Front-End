import '@/styles/font.css';
import * as styles from '@/styles/main/page.css';
import Image from 'next/image';
import TransparentHeader from '@/components/header/TransparentHeader';
import SearchBox from '@/components/main/SearchBox';
import CountrySelect from '@/components/main/CountrySelect';

const Page = () => {
  return (
    <main>
      <TransparentHeader />
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
        <CountrySelect />
      </div>
    </main>
  );
};

export default Page;
