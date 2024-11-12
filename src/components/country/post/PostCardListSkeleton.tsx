import { skeleton } from '@/styles/components/common/common.css';
import {
  profileInfoSkeleton,
  profileSkeleton,
} from '@/styles/country/post-preview-item.css';
import * as styles from '@/styles/country/post/page.css';

const PostCardListSkeleton = () => {
  return (
    <ul className={styles.postContainer}>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <li key={index} className={`${styles.postItemContainer}`}>
            <div className={`${styles.postCard}`}>
              <span className={`${styles.title} ${skeleton}`}>d</span>
              <span className={`${styles.content} ${skeleton}`}>d</span>
              <div className={`${styles.profileContainer}`}>
                <div className={`${profileSkeleton} ${skeleton}`}>d</div>
                <span className={`${profileInfoSkeleton} ${skeleton}`}>d</span>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default PostCardListSkeleton;
