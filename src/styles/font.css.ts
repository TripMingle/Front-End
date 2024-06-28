import { globalFontFace, fontFace, style } from '@vanilla-extract/css';

const gmarketSans = 'gmarketSans';

globalFontFace(gmarketSans, [
  {
    src: 'url("/GmarketSansTTF/GamrketSansTTFBold.ttf")',
    fontWeight: 'bold',
  },
  {
    src: 'url("/GmarketSansTTF/GmarketSansTTFLight.ttf")',
    fontWeight: 'light',
  },
  {
    src: 'url("/GmarketSansTTF/GmarketSansTTFMedium.ttf")',
    fontWeight: 'normal',
  },
]);
