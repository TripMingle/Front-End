import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const commentInputProfileContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 0,
  margin: '20px 0px',
  '@media': {
    'screen and (min-width: 1024px)': {
      margin: '40px 0px',
      gap: 10,
    },
  },
});

export const commentInputContainer = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  borderRadius: 5,
  padding: '13px 15px',
  border: `1px solid ${vars.color.g200}`,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '16px 20px',
    },
  },
});

export const commentInput = style({
  flex: 1,
  outline: 'none',
  border: 'none',
});

export const commentInputButton = style({
  marginLeft: 15,
  border: 'none',
  background: 'none',
  color: vars.color.secondary,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginLeft: 20,
    },
  },
});
