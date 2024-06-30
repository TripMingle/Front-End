import { globalFontFace } from '@vanilla-extract/css';

const gmarketSans = 'gmarketSans';

globalFontFace(gmarketSans, [
  {
    src: 'url("/GmarketSansTTF/GmarketSansTTFBold.ttf")',
    fontWeight: 'bold',
  },
  {
    src: 'url("/GmarketSansTTF/GmarketSansTTFLight.ttf")',
    fontWeight: 'light',
  },
  {
    src: 'url("/GmarketSansTTF/GmarketSansTTFMedium.ttf")',
    fontWeight: 'medium',
    fontStyle: 'normal',
  },
]);
