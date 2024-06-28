import { createGlobalTheme, globalFontFace } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#00C2FF',
    secondary: '#ff4343',
    black: '#000000',
    g900: '#121212',
    g800: '#262626',
    g700: '#393939',
    g600: '#4D4D4D',
    g500: '#888888',
    g400: '#B9B9B9',
    g300: '#E0E0E0',
    g200: '#F4F4F4',
    g100: '#F8F8F8',
    white: '#FFFFFF',
  },
  font: {
    notoSans: 'Noto_Sans_KR',
    gmarketSans: 'gmarketSans',
  },
});

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
