import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  width: '100%',
  padding: '12px 20px',
  border: `1px solid ${vars.color.g200}`,
  borderRadius: 10,
  boxSizing: 'border-box',
  flexDirection: 'column',
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '15px 20px',
    },
  },
});

export const explainContainer = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    show: {
      true: {
        paddingBottom: 12,
        '@media': {
          'screen and (min-width: 1024px)': {
            paddingBottom: 15,
          },
        },
      },
      false: {},
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
      true: {
        color: vars.color.black,
      },
      false: {
        color: vars.color.g400,
      },
    },
  },
});

export const dropIcon = recipe({
  base: {
    width: 20,
    height: 20,
    transition: 'transform 0.5s ease-in-out',
    '@media': {
      'screen and (min-width: 1024px)': {
        width: 24,
        height: 24,
      },
    },
  },
  variants: {
    show: {
      true: {
        transform: 'rotate(180deg)',
      },
      false: {},
    },
  },
});

export const languageListContainer = style({
  height: 282,
  overflow: 'scroll',
  zIndex: 5,
});

export const languageContainer = recipe({
  base: {
    display: 'flex',
    padding: '10px 0px',
    fontWeight: 400,
    fontFamily: vars.font.body,
    fontSize: 14,
    alignItems: 'center',
    '@media': {
      'screen and (min-width: 1024px)': {
        padding: '15px 0px',
      },
    },
  },
  variants: {
    select: {
      true: {
        color: vars.color.secondary,
        fontWeight: 700,
      },
      false: {
        color: vars.color.black,
      },
    },
  },
});

export const language = style({
  flex: 1,
});

export const checkIcon = recipe({
  base: {
    width: 20,
    height: 20,
    paddingLeft: 'auto',
    '@media': {
      'screen and (min-width: 1024px)': {
        width: 24,
        height: 24,
      },
    },
  },
  variants: {
    select: {
      true: {},
      false: {
        display: 'none',
      },
    },
  },
});
