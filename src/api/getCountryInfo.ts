export const getCountryByContinent = async (continent: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/continent/${continent}`,
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

export const getCountryByKeyword = async (keyword: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/country/search/${keyword}`,
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

export const getCountryInfo = async (country: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/country/${country}`,
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
