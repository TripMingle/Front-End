import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const calendarContainer = style({
  position: 'relative',
});

export const container = style({
  display: 'flex',
  width: '100%',
  padding: '12px 20px',
  border: `1px solid ${vars.color.g200}`,
  borderRadius: 10,
  boxSizing: 'border-box',
  alignItems: 'center',
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '15px 20px',
    },
  },
});

export const explain = recipe({
  base: {
    fontFamily: vars.font.body,
    fontWeight: 400,
    fontSize: 13,
    flex: 1,
    '@media': {
      'screen and (min-width: 1024px)': {
        fontSize: 14,
      },
    },
  },
  variants: {
    select: {
      true: {},
      false: {
        color: vars.color.g400,
      },
    },
  },
});

export const calendarIcon = style({
  width: 20,
  height: 20,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 24,
      height: 24,
    },
  },
});

export const calendar = recipe({
  base: {
    zIndex: 10,
  },
  variants: {
    show: {
      true: {},
      false: {
        display: 'none !important',
      },
    },
  },
});
