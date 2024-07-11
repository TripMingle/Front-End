import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const text = style({
  padding: '4px 5px',
  fontFamily: vars.font.menu,
  fontWeight: 'medium',
  fontSize: 10,
  color: vars.color.white,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '5px 6px',
      fontSize: 12,
    },
  },
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
