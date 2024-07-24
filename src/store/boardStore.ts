import { BoardDetailType } from '@/types/country/board';
import { create } from 'zustand';

const exampleBoardDetail: BoardDetailType = {
  boardId: 0,
  continent: '',
  countryName: '',
  title: '',
  content: '',
  language: '',
  tripType: [],
  preferGender: 0,
  preferSmoking: 0,
  preferShopping: 0,
  preferInstagramPicture: 0,
  preferDrink: 0,
  startDate: '',
  endDate: '',
  currentCount: 0,
  maxCount: 0,
  createdAt: '',
  commentCount: 0,
  likeCount: 0,
  bookMarkCount: 0,
  userId: 0,
  nickName: '',
  ageRange: '',
  gender: '',
  nationality: '',
  selfIntroduction: null,
  userImageUrl: '',
  userRating: 0,
  imageUrl: '',
  boardComments: [],
  expired: false,
  mine: false,
  liked: false,
  bookMarked: false,
  participating: false,
};

type BoardState = {
  boardDetail: BoardDetailType;
  setBoardDetail: (boardDetail: BoardDetailType) => void;
  initializeBoardDetail: () => void;
};

export const useBoardStore = create<BoardState>()((set) => ({
  boardDetail: exampleBoardDetail,
  setBoardDetail: (boardDetail: BoardDetailType) => set({ boardDetail }),
  initializeBoardDetail: () => set({ boardDetail: exampleBoardDetail }),
}));
