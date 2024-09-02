import apiFetch from '.';

export const getBoardPreview = async (country: string) => {
  return apiFetch().get(`/board/preview/${country}`);
};

export const getBoard = async (
  country: string,
  page: number,
  gender?: string,
  language?: string,
) => {
  const params = {
    page: `${page}`,
  };
  return apiFetch().get(`/board/${country}`, false, params);
};

export const getBoardDetail = async (boardId: number) => {
  return apiFetch().get(`/board/show/${boardId}`);
};
