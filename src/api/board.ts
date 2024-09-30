import { apiFetch } from '.';
import { BoardForm } from '@/types/country/board';

export const getBoardPreview = async (country: string) => {
  // TODO :: 내부 서버로는 board/country/preview가 더 나을거같음 .. -> 폴더 구조 바꾸자. app/api
  return apiFetch(`/board/preview?country=${country}`);
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

// TODO :: 수정 필요, APP API 없음
export const postBoard = async (data: BoardForm) => {
  const config = { body: JSON.stringify(data) };
  try {
    const res = await fetch('/api/post', config);
    if (!res.ok) throw new Error('post' + ' 요청을 실패했습니다');
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

// TODO :: 수정 필요, APP API 없음
export const postBoardComment = async (
  boardId: number,
  content: string,
  parentBoardCommentId?: number,
) => {
  const data = {
    boardId: boardId,
    parentBoardCommentId: parentBoardCommentId ?? -1,
    content: content,
  };
  const config = { body: JSON.stringify(data) };
  try {
    const res = await fetch('/board/comment', config);
    if (!res.ok) throw new Error('post' + ' 요청을 실패했습니다');
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
