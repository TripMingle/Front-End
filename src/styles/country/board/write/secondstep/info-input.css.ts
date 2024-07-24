import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const fieldContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const title = style({
  marginLeft: 10,
  fontFamily: vars.font.body,
  fontWeight: 500,
  fontSize: 14,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});
