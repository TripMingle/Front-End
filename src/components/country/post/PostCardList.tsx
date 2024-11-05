'use client';
import Pagenation from '@/components/common/Pagination';
import * as styles from '@/styles/country/post/page.css';
import { useEffect, useState } from 'react';
import SelectCateogry from './SelectCategory';
import { PostPreviewProps } from '@/types/country/post';
import { getPostList } from '@/api/post';
import { usePostStore } from '@/store/postStore';
import EmptyPost from '../EmptyPost';
import { usePathname } from 'next/navigation';
import { getCountryName } from '@/utils/country';
import PostCardListItem from './PostCardListItem';

const PostCardList = () => {
  const pathname = usePathname();
  const [country, setCountry] = useState<string>('');
  const [postList, setPostList] = useState<PostPreviewProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const category = usePostStore((state) => state.category);
  const setCategory = usePostStore((state) => state.setCategory);

  const getPost = async () => {
    if (country) {
      const data = await getPostList(country, category, page);
      setPostList(data.data.postings);
      setTotalPage(data.data.totalPageCount);
    }
  };

  const pageMove = (page: number) => {
    setPage(page);
  };

  const categoryHandler = (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    setCountry(getCountryName(pathname));
  }, []);

  useEffect(() => {
    getPost();
  }, [page, country]);

  useEffect(() => {
    setPage(0);
    getPost();
  }, [category]);

  return (
    <>
      <SelectCateogry categoryHandler={categoryHandler} />
      {postList.length ? (
        <>
          <ul className={styles.postContainer}>
            {postList.map((post) => (
              <li key={post.postingId} className={styles.postItemContainer}>
                <PostCardListItem props={post} />
              </li>
            ))}
          </ul>
          <Pagenation
            current={page}
            total={totalPage}
            clickHandler={pageMove}
          />
        </>
      ) : (
        <EmptyPost />
      )}
    </>
  );
};

export default PostCardList;
