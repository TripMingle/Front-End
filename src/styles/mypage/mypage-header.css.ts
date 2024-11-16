import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

export const mypageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    'screen and (min-width: 1024px)': {
      flexDirection: 'row',
    },
  },
});

export const headerContainer = style({
  padding: '30px 20px',
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 260,
      padding: 20,
      height: 'calc(100vh - 60px)',
      borderRight: `1px solid ${vars.color.g200}`,
    },
  },
});

export const contentContainer = style({
  flex: 1,
  display: 'flex',
  width: '100%',
  padding: 20,
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
});

export const mypageTitle = style({
  fontSize: 12,
  color: vars.color.g500,
  marginBottom: 4,
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
});

export const itemListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const itemContainer = recipe({
  base: {
    display: 'flex',
    width: '100%',
    height: 40,
    padding: 8,
    borderRadius: 10,
    boxSizing: 'border-box',
    alignItems: 'center',
    gap: 2,
    '@media': {
      'screen and (min-width: 1024px)': {
        cursor: 'pointer',
        gap: 5,
      },
    },
  },
  variants: {
    select: {
      true: {
        color: vars.color.secondary,
        '@media': {
          'screen and (min-width: 1024px)': {
            background: '#3688FF1A',
          },
        },
      },
      false: {
        color: vars.color.g500,
        ':hover': {
          background: vars.color.g200,
        },
      },
    },
  },
});

export const itemIcon = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'inline-block',
    },
  },
});

export const itemTitle = style({
  fontSize: 16,
  fontWeight: 600,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});
