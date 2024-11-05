import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    padding: '12px 20px',
    border: `1px solid ${vars.color.g200}`,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    boxSizing: 'border-box',
    flexDirection: 'column',
    cursor: 'pointer',
    '@media': {
      'screen and (min-width: 1024px)': {
        padding: '15px 20px',
      },
    },
  },
  variants: {
    show: {
      true: {},
      false: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
    },
  },
});

export const explainContainer = style({
  display: 'flex',
  alignItems: 'center',
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
  position: 'absolute',
  top: 44,
  left: 0,
  width: '100%',
  maxHeight: 282,
  zIndex: 5,
  padding: '8px 20px',
  overflow: 'scroll',
  background: vars.color.white,
  boxSizing: 'border-box',
  border: `1px solid ${vars.color.g200}`,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 54,
    },
  },
});

export const languageContainer = recipe({
  base: {
    display: 'flex',
    padding: '10px 0px',
    fontWeight: 400,
    fontFamily: vars.font.body,
    fontSize: 14,
    alignItems: 'center',
    ':hover': {
      background: '#3688FF1A',
      margin: '0px -12px',
      padding: '10px 12px',
      borderRadius: 6,
    },
    '@media': {
      'screen and (min-width: 1024px)': {
        padding: '15px 0px',
        ':hover': {
          margin: '0px -12px',
          padding: '15px 12px',
        },
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
