import { BoardForm } from '@/types/country/board';
import { getToken } from '@/utils/token';

export const postBoard = async (data: BoardForm) => {
  try {
    const baseurl = `${process.env.NEXT_PUBLIC_API_URL}/board`;
    const access_token = getToken();

    const res = await fetch(baseurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('동행글 작성 실패');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const postBoardComment = async (
  boardId: number,
  content: string,
  parentBoardCommentId?: number,
) => {
  try {
    const baseurl = `${process.env.NEXT_PUBLIC_API_URL}/board/comment`;
    const data = {
      boardId: boardId,
      parentBoardCommentId: parentBoardCommentId ?? -1,
      content: content,
    };

    const access_token = getToken();
    const res = await fetch(baseurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('댓글 작성 실패');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
