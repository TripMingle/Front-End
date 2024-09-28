export const apiFetch = (url: string) => {
  const request = async (url: string) => {
    try {
      const res = await fetch('/api' + url);
      if (!res.ok) throw new Error(url + ' 요청을 실패했습니다');
      return await res.json();
    } catch (error) {
      console.error(error);
    }
  };
  return request(url);
};
