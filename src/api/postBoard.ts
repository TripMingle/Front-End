import { BoardForm } from '@/types/country/board';
import apiFetch from '.';

export const postBoard = async (data: BoardForm) => {
  const config = { body: JSON.stringify(data) };
  return apiFetch().post('/board', config);
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
  const config = { body: JSON.stringify(data) };
  return apiFetch().post('/board/comment', config);
};
