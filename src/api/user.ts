export const getAccessToken = async (code: string) => {
  try {
    const params = {
      code: code,
    };
    const queryString = new URLSearchParams(params).toString();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/kakao/callback?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!res.ok) throw new Error('데이터 가져오기 실패');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const kakaoSignup = async () => {};

export const kakaoLogin = async (code: string) => {
  try {
    const data = await getAccessToken(code);
    const access_token = data.data.access_token;

    console.log(access_token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/kakao/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Kakao-Authorization': `${access_token}`,
      },
    });

    if (!res.ok) throw new Error('로그인 실패');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const checkNickName = async (nickName: string) => {
  try {
  } catch (error) {}
};
