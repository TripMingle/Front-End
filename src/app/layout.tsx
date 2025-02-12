import Initializer from '@/components/common/Initializer';
import ConditionalHeader from '@/components/header/ConditionalHeader';
import type { Metadata } from 'next';
import { noto, gmarket } from '@/styles/font';

export const metadata: Metadata = {
  title: { template: '%s | Tripmingle', default: 'Tripmingle' },
  description:
    '글로벌 여행 동행 서비스 트립밍글에서 전 세계 사람들을 만나고, 여행 정보 공유하고, 여행 동행 추천도 받아보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${noto.variable} ${gmarket.variable}`}>
      <body className={`${noto.className}`}>
        <Initializer />
        <ConditionalHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
