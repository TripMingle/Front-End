import * as styles from '@/app/page.css';
import Image from 'next/image';

const SearchBox = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.exploreContainer}>
        <div className={styles.bigCircle}></div>
        <div className={styles.smallCircle}></div>
        <div className={styles.exploreText}>
          <span>
            EXPLORE
            <br />
            YOUR DREAM
          </span>
        </div>
      </div>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="text"
          placeholder="나라를 입력하세요."
        />
        <Image
          className={styles.searchIcon}
          src="/icons/w_search.svg"
          width={24}
          height={24}
          alt="search"
        />
      </div>
    </div>
  );
};

export default SearchBox;
