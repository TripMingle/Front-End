import apiFetch from '.';

export const getPostPreview = async (country: string, postingType: string) => {
  const params = {
    country: `${country.replace(/%20/g, ' ')}`,
    postingType: `${postingType}`,
  };
  return apiFetch().get('/postings/preview', false, params);
};

export const getPost = async (
  country: string,
  postingType: string,
  page: number,
) => {
  const params = {
    country: `${country.replace(/%20/g, ' ')}`,
    postingType: `${postingType}`,
    page: `${page}`,
  };
  return apiFetch().get(`/postings`, false, params);
};
