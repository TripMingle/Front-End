import { Suspense } from 'react';
import * as styles from '@/styles/country/post/page.css';
import { PostPreviewProps } from '@/types/country/post';
import Pagenation from '@/components/common/Pagination';
import SelectCateogry from './SelectCategory';
import PostCardListItem from './PostCardListItem';
import PostCardListSkeleton from './PostCardListSkeleton';
import EmptyPost from '../EmptyPost';

const PostCardList = async ({
  country,
  page,
  category = 'restaurant',
}: {
  country: string;
  page: string;
  category: 'rentalHome' | 'restaurant' | 'schedule';
}) => {
  const res = await fetch(
    `${process.env.FRONT_URL}/api/post/list?country=${country}&page=${Number(page) - 1}&postingType=${category}`,
  );
  const data = await res.json();
  const postList: PostPreviewProps[] = data.data.postings;
  const totalPage = data.data.totalPageCount;
  if (page > totalPage) page = totalPage;

  return (
    <>
      <SelectCateogry country={country} category={category} />
      <Suspense fallback={<PostCardListSkeleton />}>
        {postList.length ? (
          <ul className={styles.postContainer}>
            {postList.map((post) => (
              <li key={post.postingId} className={styles.postItemContainer}>
                <PostCardListItem country={country} props={post} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyPost />
        )}
        {postList.length && <Pagenation current={page} total={totalPage} />}
      </Suspense>
    </>
  );
};

export default PostCardList;
