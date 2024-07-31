export const getCountryBycontinent = async (continent: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/country/${continent}`,
      {
        method: 'GET',
      },
    );

    if (!res.ok) throw new Error('데이터 가져오기 실패');

    return res.json();
    
  } catch (error) {
    console.log(error);
  }
};
