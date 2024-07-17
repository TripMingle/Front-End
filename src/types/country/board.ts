export type BoardPreviewProps = {
  continent: string;
  countryName: string;
  boardId: number;
  title: string;
  createdAt: string;
  startDate: string;
  endDate: string;
  currentCount: number;
  maxCount: number;
  language: string;
  commentCount: number;
  likeCount: number;
  bookMarkCount: number;
  imageUrl: string;
  userImageUrl: string;
  nickName: string;
  ageRange: string;
  gender: string;
  nationality: string;
  expired: boolean;
  liked: boolean;
  bookMarked: boolean;
  participating: boolean;
  mine: boolean;
};

export type BoardListProps = {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  content: BoardPreviewProps;
};
