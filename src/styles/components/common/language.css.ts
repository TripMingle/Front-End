import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const text = style({
  padding: '5px 6px',
  fontFamily: vars.font.menu,
  fontWeight: 'bold',
  color: vars.color.white,
});

export const koreanBox = style({
  display: 'inline-flex',
  borderRadius: 5,
  background: `linear-gradient(45deg, #3688FF, #0038FF)`,
});

export const englishBox = style({
  display: 'inline-flex',
  borderRadius: 5,
  background: `linear-gradient(45deg, #FFB74C, #FF7A00)`,
});

export const ChineseBox = style({
  display: 'inline-flex',
  borderRadius: 5,
  background: `linear-gradient(45deg, #FF8D8D, #FF0000)`,
});

export const JapaneseBox = style({
  display: 'inline-flex',
  borderRadius: 5,
  background: `linear-gradient(45deg, #908DFF, #9E00FF)`,
});
