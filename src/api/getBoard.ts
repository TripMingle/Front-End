export const getBoardPreview = async (country: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/board/preview/${country}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      },
    );

    if (!res.ok) throw new Error('데이터 가져오기 실패');

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getBoard = async (
  country: string,
  page: number,
  gender?: string,
  language?: string,
) => {
  try {
    const baseurl = `${process.env.NEXT_PUBLIC_API_URL}/board/${country}`;
    const params = {
      page: `${page}`,
    };
    const queryString = new URLSearchParams(params).toString();
    const requrl = `${baseurl}?${queryString}`;
    const res = await fetch(requrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    });

    if (!res.ok) throw new Error('데이터 가져오기 실패');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getBoardDetail = async (boardId: number) => {
  try {
    const baseurl = `${process.env.NEXT_PUBLIC_API_URL}/board/show/${boardId}`;
    const requrl = `${baseurl}`;
    const res = await fetch(requrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    });

    if (!res.ok) throw new Error('데이터 가져오기 실패');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
