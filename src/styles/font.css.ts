import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { Noto_Sans } from 'next/font/google';

const gmarketSans = 'gmarketSans';

globalFontFace(gmarketSans, [
  {
    src: 'url("/GmarketSansTTF/GamrketSansTTFBold.ttf")',
    fontStyle: 'bold',
  },
  {
    src: 'url("/GmarketSansTTF/GmarketSansTTFLight.ttf")',
    fontStyle: 'light',
  },
  {
    src: 'url("/GmarketSansTTF/GmarketSansTTFMedium.ttf")',
    fontStyle: 'normal',
  },
]);
