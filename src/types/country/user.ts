export type User = {
  url: string;
  name: string;
  age: number;
  gender: boolean;
  nationality: string;
};

export type BoardCardProps = {
  isMarked: boolean;
  language: string;
  title: string;
  startDate: string;
  endDate: string;
  currentCount: number;
  maxCount: number;
  user: User;
};
