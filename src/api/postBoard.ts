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

    if (!res.ok) throw new Error('데이터 가져오기 실패');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
