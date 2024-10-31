import * as styles from '@/styles/components/common/board-card.css';
import { boardContainer } from '@/styles/country/page.css';

const BoardPreviewSkeleton = () => {
  return (
    <div className={boardContainer}>
      {[...Array(4)].map((_, index) => (
        <div className={styles.containerSkeleton}>
          <div className={`${styles.imageBox}`}>
            <div className={`${styles.image} ${styles.skeleton}`}></div>
          </div>
          <div className={`${styles.contentContainer}`}>
            <div
              className={`${styles.languageSkeleton} ${styles.skeleton}`}
            ></div>
            <span className={`${styles.title} ${styles.skeleton}`}></span>
            <div className={`${styles.infoContainer} ${styles.skeleton}`}>
              -
            </div>
            <div className={`${styles.infoContainer} ${styles.skeleton}`}>
              -
            </div>
            <div className={`${styles.profileContainer}`}>
              <div
                className={`${styles.profileSkeleton} ${styles.skeleton}`}
              ></div>
              <span
                className={`${styles.profileInfoSkeleton} ${styles.skeleton}`}
              >
                f
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardPreviewSkeleton;
