export const formatDate = (date: string) => {
  const dateData = new Date(date);

  const year = dateData.getFullYear();
  const month = String(dateData.getMonth() + 1).padStart(2, '0');
  const day = String(dateData.getDate()).padStart(2, '0');
  const hours = String(dateData.getHours()).padStart(2, '0');
  const minutes = String(dateData.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}시 ${minutes}분`;
};
