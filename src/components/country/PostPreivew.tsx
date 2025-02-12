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
  const res = await fetch(
    `${process.env.FRONT_URL}/api/post/preview?country=${country}&postingType=${category}`,
  );
  if (!res.ok) throw new Error(`error on loading ${category} post preview`);

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
};

export default PostPreview;
