import MypageHeader from '@/components/mypage/MypageHeader';
import { pageContainer } from '@/styles/country/page.css';
import {
  contentContainer,
  mypageContainer,
} from '@/styles/mypage/mypage-header.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={pageContainer}>
      <div className={mypageContainer}>
        <MypageHeader />
        <div className={contentContainer}>{children}</div>
      </div>
    </div>
  );
}
