export type PostPreviewProps = {
  postingId: number; // 게시물 ID
  title: string; // 게시물 제목
  content: string; // 게시물 내용
  userImageUrl: string; // 사용자 이미지 URL
  userNickName: string; // 사용자 닉네임
  userAgeRange: string; // 사용자 나이대
  userGender: string; // 사용자 성별
  userNationality: string; // 사용자 국적
};

export type PostForm = {
  title: string;
  content: string;
  postingType: 'RESTAURANT' | 'RENTAL_HOME' | 'SCHEDULE' | '';
  country: string;
};

export const PostFormDefault: PostForm = {
  title: '',
  content: '',
  postingType: '',
  country: '',
};

export type PostDetailType = {
  commentCount: number;
  content: string;
  country: string;
  createAt: string;
  likeCount: number;
  mine: boolean;
  myLikeState: boolean;
  postingComments: PostCommentType[];
  postingId: number;
  selfIntroduce: string;
  title: string;
  userId: number;
  userAgeRange: string;
  userGender: 'male' | 'female';
  userImageUrl: string;
  userNationality: string;
  userNickName: string;
  userTemperature: number;
};

export type PostCommentType = {
  commentId: number; // 댓글 ID
  userImageUrl: string; // 사용자 프로필
  userNickName: string; // 사용자 닉네임
  comment: string; // 댓글 내용
  createdAt: string; // 날짜
  isMine: boolean; // 내 댓글 여부
};
