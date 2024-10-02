export const getFetch = (url: string) => {
  const request = async (url: string) => {
    try {
      const res = await fetch('/api' + url, {
        method: 'GET',
      });
      if (!res.ok) throw new Error(url + ' 요청을 실패했습니다');
      return await res.json();
    } catch (error) {
      console.error(error);
    }
  };
  return request(url);
};

export const postFetch = (url: string, body?: Object) => {
  const request = async (url: string) => {
    try {
      const res = await fetch('/api' + url, {
        method: 'POST',
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(url + ' 요청을 실패했습니다');
      return await res.json();
    } catch (error) {
      console.error(error);
    }
  };
  return request(url);
};
