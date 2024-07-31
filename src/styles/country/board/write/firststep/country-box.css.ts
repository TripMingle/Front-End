import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const countryContainer = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    left: '50%',
    width: 160,
    height: 60,
    padding: '0px 30px',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: vars.font.body,
    fontWeight: 700,
    fontSize: 14,
    boxShadow: '0px 10px 20px 0px #0000000D',
    transform: 'translate(-50%,0)',
    cursor: 'pointer',
    boxSizing: 'border-box',
    textAlign: 'center',
    '@media': {
      'screen and (min-width: 1024px)': {
        width: 220,
        height: 72,
        padding: '0px 40px',
        borderRadius: 12,
        fontSize: 16,
      },
    },
  },
  variants: {
    select: {
      true: {
        border: `1px solid ${vars.color.secondary}`,
        color: vars.color.secondary,
      },
      false: {},
    },
  },
});

export const resultContainer = style({
  height: 'calc(100% - 76px)',
  paddingBottom: 20,
  overflow: 'scroll',
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 'calc(100% - 120px)',
    },
  },
});

export const listContainer = style({
  position: 'relative',
  display: 'grid',
  gap: 15,
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  marginBottom: 10,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 30,
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    },
  },
});

export const iconContainer = recipe({
  base: { display: 'none' },
  variants: {
    select: {
      true: {
        position: 'absolute',
        display: 'flex',
        width: 20,
        height: 20,
        right: 10,
        background: vars.color.secondary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        '@media': {
          'screen and (min-width: 1024px)': {
            width: 24,
            height: 24,
            right: 16,
            borderRadius: 15,
          },
        },
      },
      false: {},
    },
  },
});

export const icon = style({
  width: 11,
  height: 9,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 14,
      height: 12,
    },
  },
});
