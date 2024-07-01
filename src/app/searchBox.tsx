import * as styles from './page.css';

const SearchBox = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.exploreContainer}>
        <div className={styles.bigCircle}></div>
        <div className={styles.smallCircle}></div>
        <div className={styles.exploreText}>
          <div>EXPLORE</div>
          <div>YOUR DREAM</div>
        </div>
      </div>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="text"
          placeholder="나라를 입력하세요."
        />
        <img
          className={styles.searchIcon}
          src="/icons/w_search.svg"
          alt="search"
        />
      </div>
    </div>
  );
};

export default SearchBox;
