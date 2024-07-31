import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const countryWriteContainer = style({
  position: 'fixed',
  right: 10,
  bottom: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      right: 20,
      bottom: 60,
    },
    'screen and (min-width: 1200px)': {
      right: 'calc((100vw - 1200px)/2)',
      bottom: 60,
    },
  },
});

export const writeText = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'flex',
      color: vars.color.secondary,
      fontWeight: 500,
      fontSize: 14,
    },
  },
});

export const writeItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 20,
    },
  },
});

export const iconContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 42,
  height: 42,
  zIndex: 10,
  borderRadius: '50%',
  background: `linear-gradient(98.24deg, ${vars.color.secondary} 0%, ${vars.color.primary} 100%)`,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 48,
      height: 48,
    },
  },
});

export const icon = style({});

export const writeContainer = recipe({
  base: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    zIndex: 3,
    borderRadius: '50%',
    background: vars.color.white,
    fontFamily: vars.font.menu,
    fontWeight: 'normal',
    fontSize: 10,
    color: vars.color.secondary,
    transition: 'all 0.5s ease',
    '@media': {
      'screen and (min-width: 1024px)': {
        fontSize: 12,
        width: 42,
        height: 42,
      },
    },
  },
  variants: {
    active: {
      true: {
        border: `1px solid rgba(54, 136, 255, 0.2)`,
        boxShadow: `0px 5px 10px 0px rgba(54, 136, 255, 0.3)`,
      },
      false: { bottom: 0 },
    },
    type: {
      board: {
        bottom: 52,
        '@media': {
          'screen and (min-width: 1024px)': {
            bottom: 84,
          },
        },
      },
      post: {
        bottom: 100,
        '@media': {
          'screen and (min-width: 1024px)': {
            bottom: 140,
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        active: false,
        type: 'board',
      },
      style: {
        bottom: 0,
        '@media': {
          'screen and (min-width: 1024px)': {
            bottom: 20,
          },
        },
      },
    },
    {
      variants: {
        active: false,
        type: 'post',
      },
      style: {
        bottom: 0,
        '@media': {
          'screen and (min-width: 1024px)': {
            bottom: 20,
          },
        },
      },
    },
    {
      variants: {
        active: true,
        type: 'board',
      },
      style: {
        bottom: 52,
        '@media': {
          'screen and (min-width: 1024px)': {
            bottom: 84,
          },
        },
      },
    },
    {
      variants: {
        active: true,
        type: 'post',
      },
      style: {
        bottom: 100,
        '@media': {
          'screen and (min-width: 1024px)': {
            bottom: 140,
          },
        },
      },
    },
  ],
});

export const postWriteContainer = style({});
