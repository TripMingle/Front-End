import { getFetch } from '.';

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
