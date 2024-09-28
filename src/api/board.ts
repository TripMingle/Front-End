import { apiFetch } from '.';

export const getBoardPreview = async (country: string) => {
  // TODO :: 내부 서버로는 board/country/preview가 더 나을거같음 .. -> 폴더 구조 바꾸자. app/api
  return apiFetch(`/board/preview/${country}`);
};

export const getBoardList = async (
  country: string,
  page: number,
  gender?: string,
  language?: string,
) => {
  //TODO :: GET, APP/API 없음
  return apiFetch(`/board/${country}?page=${page}`);
};

export const getBoardDetail = async (boardId: number) => {
  //TODO :: GET `/board/show/${boardId}` , APP/API 없음
  return apiFetch(`/board/${boardId}`);
};
