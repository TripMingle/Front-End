import * as styles from '@/styles/country/page.css';
import PostPreviewItem from './PostPreviewItem';
import { PostPreviewProps } from '@/types/country/post';
import EmptyPost from './EmptyPost';

const PostPreview = async ({
  country,
  category,
}: {
  country: string;
  category: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.FRONT_URL}/api/post/preview?country=${country}&postingType=${category}`,
    );
    const data = await res.json();
    const postPreview: PostPreviewProps[] = data.data;

    return postPreview.length ? (
      <ul className={styles.postContainer}>
        {postPreview.map((post) => (
          <li key={post.postingId}>
            <PostPreviewItem country={country} props={post} />
          </li>
        ))}
      </ul>
    ) : (
      <EmptyPost />
    );
  } catch (error) {
    throw new Error('에러다.');
  }
};

export default PostPreview;
