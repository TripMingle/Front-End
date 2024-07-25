import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'end',
  margin: '12px 0px',
});

export const titleContainer = style({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 12,
  color: vars.color.secondary,
  margin: '0px 36px 0px 12px',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 14,
      margin: '0px 20px',
    },
  },
});

export const radioContainer = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  maxWidth: 280,
  marginLeft: 'auto',
  justifyContent: 'space-between',
  '@media': {
    'screen and (min-width: 1024px)': {
      maxWidth: 500,
    },
  },
});

export const radioGroup = style({
  display: 'flex',
  width: 60,
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  gap: 8,
  fontWeight: 700,
  fontSize: 10,
  color: vars.color.g400,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 72,
      fontSize: 12,
    },
  },
});

export const check = recipe({
  base: {
    width: 14,
    height: 14,
    padding: 2,
    borderRadius: '50%',
    border: `2px solid ${vars.color.secondary}`,
    '@media': {
      'screen and (min-width: 1024px)': {
        width: 20,
        height: 20,
      },
    },
  },
  variants: {
    select: {
      true: {
        background: vars.color.secondary,
      },
    },
  },
});

export const input = style({
  display: 'none',
});
