import * as styles from '@/styles/main/page.css';
import Image from 'next/image';
import CountrySearch from '@/components/main/CountrySearch';
import CountrySelect from '@/components/main/CountrySelect';

const Page = () => {
  return (
    <>
      <div className={styles.bgContainer}>
        <Image
          className={styles.bg}
          src="/images/mainbg.png"
          fill
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
          alt="mainBackground"
        />
        <CountrySearch />
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
    </>
  );
};

export default Page;
