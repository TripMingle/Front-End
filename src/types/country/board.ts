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

export type BoardDetailType = {
  boardId: number;
  continent: string;
  countryName: string;
  title: string;
  content: string;
  language: string;
  tripType: string[];
  preferGender: number;
  preferSmoking: number;
  preferShopping: number;
  preferInstagramPicture: number;
  preferDrink: number;
  startDate: string;
  endDate: string;
  currentCount: number;
  maxCount: number;
  createdAt: string;
  commentCount: number;
  likeCount: number;
  bookMarkCount: number;
  userId: number;
  nickName: string;
  ageRange: string;
  gender: string;
  nationality: string;
  selfIntroduction: string | null;
  userImageUrl: string;
  userRating: number;
  imageUrl: string;
  boardCommentResDTOS: CommentType[];
  expired: boolean;
  mine: boolean;
  liked: boolean;
  bookMarked: boolean;
  participating: boolean;
};

export type CommentType = {
  boardId: number; // 게시판 ID
  boardCommentId: number; // 댓글 ID
  content: string; // 댓글 내용
  registeredDate: string; // 등록 날짜 (ISO 8601 형식)
  userId: number; // 사용자 ID
  userNickname: string; // 사용자 닉네임
  childBoards: CommentType[]; // 자식 댓글 배열
  mine: boolean; // 내 댓글 여부
};
