import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const postCard = style({
  display: 'inline-block',
  width: 160,
  height: 211,
  borderRadius: 10,
  boxShadow: '0px 10px 20px 0px #0000000D',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 255,
      height: 338,
      borderRadius: 20,
    },
  },
});

export const imageBox = style({
  position: 'relative',
  width: '100%',
  height: 95,
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 150,
    },
  },
});

export const image = style({
  borderRadius: '10px 10px 0px 0px',
  '@media': {
    'screen and (min-width: 1024px)': {
      borderRadius: '20px 20px 0px 0px',
    },
  },
});

export const bookMarkContainer = style({
  position: 'absolute',
  top: 10,
  right: 10,
  width: 30,
  height: 30,
  borderRadius: '50%',
  background: 'rgba(0, 0, 0, 0.7)',
});

export const bookMark = style({
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const contentContainer = style({
  padding: '10px 10px',
  background: vars.color.white,
  borderRadius: 10,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '15px 20px',
    },
  },
});

export const title = style({
  display: 'flex',
  fontSize: 12,
  fontWeight: 700,
  marginTop: 5,
  justifyItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
      marginTop: 10,
    },
  },
});

export const infoContainer = style({
  display: 'flex',
  marginTop: 5,
  fontSize: 10,
  fontWeight: 400,
  alignContent: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 10,
      fontSize: 14,
    },
  },
});

export const icon = style({
  marginRight: 5,
  width: 12,
  height: 12,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginRight: 10,
      width: 16,
      height: 16,
    },
  },
});

export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: 10,
  marginLeft: -4,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginLeft: -4,
    },
  },
});

export const profileInfo = style({
  color: vars.color.g500,
  fontSize: 11,
  fontWeight: 400,
  marginLeft: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 12,
    },
  },
});
