import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const postCard = style({
  width: 191,
  height: 99,
  borderRadius: 10,
  padding: 15,
  boxShadow: '0px 10px 20px 0px #0000000D',
  fontFamily: vars.font.body,
  color: vars.color.g500,
  background: vars.color.white,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 215,
      height: 118,
      padding: 20,
    },
  },
  ':hover': {
    color: vars.color.white,
    background: 'linear-gradient(284.04deg, #00C2FF 0%, #3688FF 100%)',
  },
});

export const title = style({
  display: 'inline-block',
  width: '100%',
  marginBottom: 10,
  color: vars.color.black,
  fontSize: 12,
  fontWeight: 700,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
      marginBottom: 12,
    },
  },
  selectors: {
    [`${postCard}:hover &`]: {
      color: vars.color.white,
    },
  },
});

export const content = style({
  display: 'flex',
  height: 32,
  marginBottom: 15,
  fontSize: 11,
  fontWeight: 500,
  lineHeight: 1.5,
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 38,
      marginBottom: 20,
      fontSize: 13,
    },
  },
});

export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const profileInfo = style({
  marginLeft: 5,
  fontWeight: 400,
  fontSize: 12,
});

export const postCardSkeleton = style({
  width: 191,
  height: 99,
  borderRadius: 10,
  padding: 15,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 215,
      height: 118,
      padding: 20,
    },
  },
});

export const profileSkeleton = style({
  width: 18,
  height: 18,
  borderRadius: 24,
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 24,
      height: 24,
    },
  },
});

export const profileInfoSkeleton = style({
  flex: 1,
  marginLeft: 5,
});
