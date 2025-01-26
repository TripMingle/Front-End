export const formatDate = (date: string) => {
  const dateData = new Date(date);
  dateData.setHours(dateData.getHours() + 9);

  const year = dateData.getFullYear();
  const month = String(dateData.getMonth() + 1).padStart(2, '0');
  const day = String(dateData.getDate()).padStart(2, '0');
  const hours = String(dateData.getHours()).padStart(2, '0');
  const minutes = String(dateData.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}시 ${minutes}분`;
};

export const formatDay = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDateInRange = (date1: string, date2: string) => {
  const start = new Date(date1);
  const end = new Date(date2);
  const dateArray: string[] = [];

  let currentDate = start;

  while (currentDate <= end) {
    dateArray.push(formatDay(currentDate)); // 'YYYY-MM-DD' 형식으로 날짜 추가
    currentDate.setDate(currentDate.getDate() + 1); // 다음 날짜로 이동
  }

  return dateArray;
};

export const formatCalendarDay = (
  locale: string | undefined,
  date: Date,
): string => {
  const day = date.getDate();
  return day < 10 ? `0${day}` : `${day}`;
};

export const dateString = (value: string) => {
  const date = value.replace(/[^0-9]/g, '');
  if (date.length <= 4) {
    return date;
  } else if (date.length <= 6) {
    return `${date.slice(0, 4)}-${date.slice(4)}`;
  } else {
    return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`;
  }
};
