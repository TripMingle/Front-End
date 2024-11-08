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

export type UserSignupType = {
  name: string;
  gender: string;
  birthDay: string;
  phoneNumber: string;
  nickName: string;
  nationality: string;
  selfIntroduction: string;
};

export const UserSingupDefault = {
  name: '',
  gender: '',
  birthDay: '',
  phoneNumber: '',
  nickName: '',
  nationality: '',
  selfIntroduction: '',
};
