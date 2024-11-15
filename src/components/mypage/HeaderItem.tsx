'use client';

import {
  itemContainer,
  itemIcon,
  itemTitle,
} from '@/styles/mypage/mypage-header.css';
import PersonIcon from '@/components/common/icons/PersonIcon';
import EditIcon from '@/components/common/icons/EditIcon';
import AirplaneIcon from '@/components/common/icons/AirplaneIcon';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  title: 'info' | 'write' | 'join';
};

const titles = {
  info: '회원정보 수정',
  write: '내가 쓴 게시물',
  join: '참여한 동행 게시물',
};

const icons = {
  info: PersonIcon,
  write: EditIcon,
  join: AirplaneIcon,
} as const;

const HeaderItem = ({ title }: Props) => {
  const Icon = icons[title];
  const router = useRouter();
  const pathname = usePathname();
  // /mypage/info, /mypage/write, /mypage/join 에서 마지막 세그먼트만 추출
  const select = pathname.split('/').pop() as 'info' | 'write' | 'join';

  return (
    <div
      className={itemContainer({ select: select == title })}
      onClick={() => router.push(`/mypage/${title}`)}
    >
      <Icon
        className={itemIcon}
        color={select == title ? '#3688FF' : '#888888'}
      />
      <span className={itemTitle}>{titles[title]}</span>
    </div>
  );
};

export default HeaderItem;
