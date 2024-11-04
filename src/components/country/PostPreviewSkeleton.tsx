import { postContainer } from '@/styles/country/page.css';
import * as styles from '@/styles/country/post-preview-item.css';
import { skeleton } from '@/styles/components/common/common.css';

const PostPreviewSkeleton = () => {
  return (
    <ul className={postContainer}>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <div className={styles.postCardSkeleton}>
              <span className={`${styles.title} ${skeleton}`}>d</span>
              <span className={`${styles.content} ${skeleton}`}>d</span>
              <div className={`${styles.profileContainer}`}>
                <div className={`${styles.profileSkeleton} ${skeleton}`}></div>
                <span className={`${styles.profileInfoSkeleton} ${skeleton}`}>
                  d
                </span>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default PostPreviewSkeleton;
