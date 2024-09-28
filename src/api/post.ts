import { apiFetch } from '.';

export const getPostPreview = async (country: string, postingType: string) => {
  return apiFetch(
    `/post/preview?country=${country}&postingType=${postingType}`,
  );
};

export const getPostList = async (
  country: string,
  postingType: string,
  page: number,
) => {
  // TODO :: APP API 없음 , '/postings'
  const params = `country=${country}&postingType=${postingType}&page=${page}`;
  return apiFetch(`/post?${params}`);
};
