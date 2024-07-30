export const getPost = async (
  country: string,
  postingType: string,
  page: number,
) => {
  try {
    const baseurl = `${process.env.NEXT_PUBLIC_API_URL}/postings`;
    const params = {
      country: `${country.replace(/%20/g, ' ')}`,
      postingType: `${postingType}`,
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

export const getPostPreview = async (country: string, postingType: string) => {
  try {
    const baseurl = `${process.env.NEXT_PUBLIC_API_URL}/postings/preview`;
    const params = {
      country: `${country.replace(/%20/g, ' ')}`,
      postingType: `${postingType}`,
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
