import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const postContainer = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(221px, 1fr))',
  gap: 15,
  justifyItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
      gap: 20,
    },
  },
});

export const postCard = style({
  width: '100%',
  height: 132,
  padding: 15,
  borderRadius: 10,
  boxShadow: '0px 10px 20px 0px #0000000D',
  fontFamily: vars.font.body,
  color: vars.color.g500,
  background: vars.color.white,
  cursor: 'pointer',
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 500px)': {
      width: 220,
    },
    'screen and (min-width: 1024px)': {
      width: 256,
      height: 156,
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
  display: 'inline-block',
  width: '100%',
  marginBottom: 10,
  color: vars.color.black,
  fontSize: 13,
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

export const postItemContainer = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});
