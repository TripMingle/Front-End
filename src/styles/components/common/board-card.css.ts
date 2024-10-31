import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const postCard = style({
  display: 'block',
  width: '100%',
  maxWidth: 255,
  height: 'auto', // 비율 유지를 위해 auto로 변경
  borderRadius: 14,
  boxShadow: '0px 10px 20px 0px #0000000D',
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      borderRadius: 20,
    },
  },
});

export const imageBox = style({
  position: 'relative',
  width: '100%',
  paddingTop: '60%',
  overflow: 'hidden',
});

export const image = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
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
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100% - 20px)',
  padding: '10px 10px',
  background: vars.color.white,
  borderRadius: 10,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '15px 20px',
      width: 'calc(100% - 30px)',
    },
  },
});

export const title = style({
  fontSize: 'clamp(12px, 1.67vw, 18px)',
  fontWeight: 700,
  marginTop: 5,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 10,
    },
  },
});

export const infoContainer = style({
  width: '100%',
  display: 'flex',
  marginTop: 5,
  alignItems: 'center',
  fontSize: 'clamp(10px, 1.3vw, 14px)',
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 10,
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
