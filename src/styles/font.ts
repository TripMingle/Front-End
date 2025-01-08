import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const noto = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

export const gmarket = localFont({
  src: [
    { path: '../../public/font/GmarketSansTTFBold.ttf', weight: '700' },
    { path: '../../public/font/GmarketSansTTFMedium.ttf', weight: '500' },
    { path: '../../public/font/GmarketSansTTFLight.ttf', weight: '300' },
  ],
  variable: '--font-gmarket-sans',
});
