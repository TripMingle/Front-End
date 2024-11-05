import { getFetch, postFetch } from '.';
import { PostForm } from '@/types/country/post';

export const getPostPreview = async (country: string, postingType: string) => {
  return getFetch(
    `/post/preview?country=${country}&postingType=${postingType}`,
  );
};

export const getPostList = async (
  country: string,
  postingType: string,
  page: number,
) => {
  const params = `country=${country}&postingType=${postingType}&page=${page}`;
  return getFetch(`/post/list?${params}`);
};

export const postPost = async (data: PostForm) => {
  return postFetch(`/post`, data);
};

export const postPostComment = async (
  postId: number,
  comment: string,
  parentCommentId?: number,
) => {
  const data = {
    parentCommentId: parentCommentId ?? -1,
    comment: comment,
  };
  return postFetch(`/post/comment?postId=${postId}`, data);
};
