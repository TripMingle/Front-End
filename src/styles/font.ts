import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const noto = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

export const gmarket = localFont({
  src: [
    { path: '../../public/font/GmarketSansTTFBold.woff2', weight: '700' },
    { path: '../../public/font/GmarketSansTTFMedium.woff2', weight: '500' },
    { path: '../../public/font/GmarketSansTTFLight.woff2', weight: '300' },
  ],
  variable: '--font-gmarket-sans',
});
