import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const postContainer = style({
  position: 'relative',
  display: 'grid',
  marginTop: 20,
  gridTemplateColumns: 'repeat(auto-fill, minmax(221px, 1fr))',
  gap: 15,
  justifyItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 30,
      gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
      gap: 20,
    },
  },
});

export const postCard = style({
  width: 'calc(100% - 70px)',
  height: 99,
  padding: 15,
  borderRadius: 10,
  boxShadow: '0px 10px 20px 0px #0000000D',
  fontFamily: vars.font.body,
  color: vars.color.g500,
  background: vars.color.white,
  '@media': {
    'screen and (min-width: 500px)': {
      width: 191,
    },
    'screen and (min-width: 1024px)': {
      width: 215,
      height: 118,
      padding: 20,
      borderRadius: 20,
    },
  },
  ':hover': {
    color: vars.color.white,
    background: 'linear-gradient(284.04deg, #00C2FF 0%, #3688FF 100%)',
  },
});

export const title = style({
  display: 'flex',
  marginBottom: 10,
  color: vars.color.black,
  fontSize: 13,
  fontWeight: 700,
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

export const postItemContainer = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});
