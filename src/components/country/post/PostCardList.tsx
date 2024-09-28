'use client';
import Pagenation from '@/components/common/Pagination';
import Profile from '@/components/common/Profile';
import * as styles from '@/styles/country/post/page.css';
import { useEffect, useState } from 'react';
import SelectCateogry from './SelectCategory';
import { PostPreviewProps } from '@/types/country/post';
import { getPostList } from '@/api/post';
import { useCountryStore } from '@/store/countryStore';
import { usePostStore } from '@/store/postStore';
import EmptyPost from '../EmptyPost';
import { usePathname } from 'next/navigation';
import { getCountryName } from '@/utils/country';

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
      console.log(data);
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
                <PostPreview props={post} />
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

const PostPreview = ({ props }: { props: PostPreviewProps }) => {
  return (
    <div className={styles.postCard}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.content}>{props.content}</span>
      <div className={styles.profileContainer}>
        <Profile
          url={props.userImageUrl}
          width={18}
          height={18}
          changeWidth={24}
          changeHeight={24}
        />
        <span className={styles.profileInfo}>
          {`${props.userNickName} · ${props.userAgeRange.slice(0, 2)}대 · 
          ${props.userGender === 'male' ? '남' : '여'} · ${props.userNationality}`}
        </span>
      </div>
    </div>
  );
};

export default PostCardList;
