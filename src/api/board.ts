import { getFetch, postFetch } from '.';
import { BoardForm } from '@/types/country/board';

export const getBoardPreview = async (country: string) => {
  return getFetch(`/board/preview?country=${country}`);
};

export const getBoardList = async (
  country: string,
  page: number,
  gender?: string,
  language?: string,
) => {
  return getFetch(`/board/list?country=${country}&page=${page}`);
};

export const getBoardDetail = async (boardId: number) => {
  return getFetch(`/board?boardId=${boardId}`);
};

export const getBoardSchedule = async (boardId: number) => {
  return getFetch(`/board/schedule?boardId=${boardId}`);
};

export const postBoard = async (data: BoardForm) => {
  return postFetch(`/board`, data);
};

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
  return postFetch(`/board/comment`, data);
};
