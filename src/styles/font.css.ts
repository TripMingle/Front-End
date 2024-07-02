import { globalFontFace } from '@vanilla-extract/css';

const gmarketSans = 'gmarketSans';

globalFontFace(gmarketSans, [
  {
    src: 'url("/font/GmarketSansTTFBold.ttf")',
    fontWeight: 'bold',
  },
  {
    src: 'url("/font/GmarketSansTTFLight.ttf")',
    fontWeight: 'light',
  },
  {
    src: 'url("/font/GmarketSansTTFMedium.ttf")',
    fontWeight: 'medium',
    fontStyle: 'normal',
  },
]);
