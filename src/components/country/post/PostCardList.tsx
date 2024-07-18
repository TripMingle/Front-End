'use client';
import Pagenation from '@/components/common/Pagination';
import Profile from '@/components/common/Profile';
import * as styles from '@/styles/country/post/page.css';
import { useEffect, useState } from 'react';
import SelectCateogry from './SelectCategory';
import { PostPreviewProps } from '@/types/country/post';
import { getPost } from '@/api/getPost';
import { useCountryStore } from '@/store/countryStore';
import { usePostStore } from '@/store/postStore';

const PostCardList = () => {
  const country = useCountryStore((state) => state.country);
  const category = usePostStore((state) => state.category);
  const setCategory = usePostStore((state) => state.setCategory);
  const [postList, setPostList] = useState<PostPreviewProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);

  const getPostList = async () => {
    if (country) {
      const data = await getPost(country, category, page);
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
    getPostList();
  }, [page, country]);

  useEffect(() => {
    setPage(0);
    getPostList();
  }, [category]);

  return (
    <>
      <SelectCateogry categoryHandler={categoryHandler} />
      <ul className={styles.postContainer}>
        {postList.map((post) => (
          <li key={post.postingId} className={styles.postItemContainer}>
            <PostPreview props={post} />
          </li>
        ))}
      </ul>
      <Pagenation current={page} total={totalPage} clickHandler={pageMove} />
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
          {props.userNickName} · {props.userAgeRange.slice(0, 2)}대 ·{' '}
          {props.userGender == 'male' ? '남' : '여'} · {props.userNationality}
        </span>
      </div>
    </div>
  );
};

export default PostCardList;
