import { BoardForm } from '@/types/country/board';

export const postBoard = async (params: BoardForm) => {
  try {
    const baseurl = `${process.env.NEXT_PUBLIC_API_URL}/board`;
    const data = params;
    const res = await fetch(baseurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
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
    const res = await fetch(baseurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('댓글 작성 실패');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
