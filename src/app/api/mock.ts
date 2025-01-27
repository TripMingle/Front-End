export const mockCountryData = {
  countryImageUrl:
    'https://plus.unsplash.com/premium_photo-1661962874730-5d52a4f30d04?q=80&w=2816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  continentName: '유럽',
  continentEnglishName: 'Europe',
  countryName: '이탈리아',
  countryEnglishName: 'Italy',
};

export const mockCountriesData = [
  {
    capitalName: '로마',
    capitalNameEnglish: 'Rome',
    continentName: '유럽',
    continentNameEnglish: 'Europe',
    countryName: '이탈리아',
    countryNameEnglish: 'Italy',
    primaryImageUrl:
      'https://plus.unsplash.com/premium_photo-1661962874730-5d52a4f30d04?q=80&w=2816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export type CountryType = {
  capitalName: string;
  capitalNameEnglish: string;
  continentName: string;
  continentNameEnglish: string;
  countryName: string;
  countryNameEnglish: string;
  primaryImageUrl: string;
};

export const mockBoardPreviewData = [
  {
    continent: 'Europe',
    countryName: 'Italy',
    boardId: 1,
    title: '이탈리아 로마 투어 동행 구합니다!',
    createdAt: '2025-01-01T10:00:00Z',
    startDate: '2025-01-10',
    endDate: '2025-01-15',
    currentCount: 1,
    maxCount: 4,
    language: 'Korean',
    commentCount: 5,
    likeCount: 10,
    bookMarkCount: 7,
    imageUrl:
      'https://images.unsplash.com/photo-1575503129135-fb35f49775f8?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    nickName: '로마여행자',
    ageRange: '20',
    gender: 'male',
    nationality: '대한민국',
    expired: false,
    liked: true,
    bookMarked: true,
    participating: true,
    mine: false,
  },
  {
    continent: 'Europe',
    countryName: 'Italy',
    boardId: 2,
    title: '피렌체 미술관 투어 동행해요!',
    createdAt: '2025-01-02T11:00:00Z',
    startDate: '2025-01-12',
    endDate: '2025-01-18',
    currentCount: 2,
    maxCount: 5,
    language: 'Korean',
    commentCount: 3,
    likeCount: 15,
    bookMarkCount: 9,
    imageUrl:
      'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userImageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    nickName: '예술애호가',
    ageRange: '30',
    gender: 'female',
    nationality: '북한',
    expired: false,
    liked: false,
    bookMarked: true,
    participating: false,
    mine: false,
  },
  {
    continent: 'Europe',
    countryName: 'Italy',
    boardId: 3,
    title: '베네치아 곤돌라 체험 같이 하실 분!',
    createdAt: '2025-01-03T09:30:00Z',
    startDate: '2025-01-15',
    endDate: '2025-01-20',
    currentCount: 3,
    maxCount: 6,
    language: 'English',
    commentCount: 4,
    likeCount: 8,
    bookMarkCount: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userImageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    nickName: '곤돌라매니아',
    ageRange: '20',
    gender: 'male',
    nationality: '대한민국',
    expired: false,
    liked: true,
    bookMarked: false,
    participating: true,
    mine: false,
  },
  {
    continent: 'Europe',
    countryName: 'Italy',
    boardId: 4,
    title: '나폴리 피자 투어 동행자 구합니다!',
    createdAt: '2025-01-04T15:00:00Z',
    startDate: '2025-01-20',
    endDate: '2025-01-25',
    currentCount: 2,
    maxCount: 4,
    language: 'Korean',
    commentCount: 6,
    likeCount: 12,
    bookMarkCount: 8,
    imageUrl:
      'https://images.unsplash.com/photo-1609244283184-96db6d696573?q=80&w=2840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userImageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    nickName: '피자러버',
    ageRange: '20',
    gender: 'female',
    nationality: '대한민국',
    expired: false,
    liked: false,
    bookMarked: true,
    participating: false,
    mine: false,
  },
];

export const mockRentalHomePreviewData = [
  {
    postingId: 1,
    title: '로마 중심가 추천 숙소',
    content:
      '로마의 중심가에서 가까운 아늑한 숙소를 추천합니다. 관광지와의 접근성도 좋아요.',
    userImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    userNickName: '여행매니아',
    userAgeRange: '30',
    userGender: 'male',
    userNationality: '대한민국',
  },
  {
    postingId: 2,
    title: '피렌체의 조용한 숙소',
    content:
      '피렌체의 조용한 동네에 위치한 숙소입니다. 미술관과의 접근성도 좋고, 분위기도 좋습니다.',
    userImageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    userNickName: '예술애호가',
    userAgeRange: '25',
    userGender: 'female',
    userNationality: '대한민국',
  },
  {
    postingId: 3,
    title: '베네치아 운하 근처 숙소 추천',
    content:
      '베네치아의 유명한 운하 근처에 위치한 숙소입니다. 로맨틱한 분위기를 만끽할 수 있어요.',
    userImageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    userNickName: '여행러버',
    userAgeRange: '28',
    userGender: 'male',
    userNationality: '대한민국',
  },
  {
    postingId: 4,
    title: '나폴리의 바다 전망 숙소',
    content:
      '나폴리에서 바다를 바로 볼 수 있는 숙소를 추천합니다. 이곳에서의 숙박은 평생 기억에 남을 거예요.',
    userImageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    userNickName: '피자매니아',
    userAgeRange: '35',
    userGender: 'female',
    userNationality: '대한민국',
  },
];

export const mockSchedulePreviewData = [
  {
    postingId: 5,
    title: '로마 3일 여행 일정 추천',
    content:
      '로마에서 3일 동안 여행할 수 있는 최고의 일정을 추천드립니다. 주요 명소를 놓치지 마세요!',
    userImageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    userNickName: '로마마스터',
    userAgeRange: '40',
    userGender: 'male',
    userNationality: '대한민국',
  },
  {
    postingId: 6,
    title: '피렌체와 베네치아 5일 여행 계획',
    content:
      '피렌체와 베네치아를 5일 동안 여행할 수 있는 일정 추천글입니다. 미술과 역사를 좋아하는 분들에게 추천!',
    userImageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    userNickName: '여행러버',
    userAgeRange: '32',
    userGender: 'female',
    userNationality: '대한민국',
  },
];

export const mockRestaurantPreviewData = [
  {
    postingId: 7,
    title: '로마의 유명한 피자 맛집',
    content:
      '로마에서 먹을 수 있는 가장 유명한 피자 맛집을 소개합니다. 현지인들이 추천하는 곳이죠.',
    userImageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    userNickName: '피자광',
    userAgeRange: '28',
    userGender: 'male',
    userNationality: '대한민국',
  },
  {
    postingId: 8,
    title: '피렌체에서 꼭 가봐야 할 레스토랑',
    content:
      '피렌체에서 추천하는 현지 레스토랑을 소개합니다. 이곳은 전통적인 이탈리아 요리를 제공합니다.',
    userImageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    userNickName: '맛집탐방',
    userAgeRange: '27',
    userGender: 'female',
    userNationality: '대한민국',
  },
  {
    postingId: 9,
    title: '베네치아 해산물 맛집',
    content:
      '베네치아에서 신선한 해산물을 즐길 수 있는 맛집을 소개합니다. 이곳은 꼭 가봐야 해요.',
    userImageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
    userNickName: '음식애호가',
    userAgeRange: '35',
    userGender: 'male',
    userNationality: '대한민국',
  },
  {
    postingId: 10,
    title: '나폴리 전통 피자 맛집',
    content:
      '나폴리에서 먹을 수 있는 전통적인 피자 맛집을 소개합니다. 현지인들이 자주 찾는 명소에요.',
    userImageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
    userNickName: '피자매니아',
    userAgeRange: '30',
    userGender: 'female',
    userNationality: '대한민국',
  },
];
