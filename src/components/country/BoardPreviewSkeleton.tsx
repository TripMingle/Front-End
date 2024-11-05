import * as styles from '@/styles/components/common/board-card.css';
import { skeleton } from '@/styles/components/common/common.css';
import { boardContainer } from '@/styles/country/page.css';

const BoardPreviewSkeleton = () => {
  return (
    <div className={boardContainer}>
      {[...Array(4)].map((_, index) => (
        <div className={styles.containerSkeleton} key={index}>
          <div className={`${styles.imageBox}`}>
            <div className={`${styles.image} ${skeleton}`}></div>
          </div>
          <div className={`${styles.contentContainer}`}>
            <div className={`${styles.languageSkeleton} ${skeleton}`}></div>
            <span className={`${styles.title} ${skeleton}`}></span>
            <div className={`${styles.infoContainer} ${skeleton}`}>-</div>
            <div className={`${styles.infoContainer} ${skeleton}`}>-</div>
            <div className={`${styles.profileContainer}`}>
              <div className={`${styles.profileSkeleton} ${skeleton}`}></div>
              <span className={`${styles.profileInfoSkeleton} ${skeleton}`}>
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
