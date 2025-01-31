import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const boardCard = style({
  display: 'block',
  width: '100%',
  minWidth: 148,
  height: 226,
  borderRadius: 14,
  boxShadow: '0px 10px 20px 0px #0000000D',
  cursor: 'pointer',
  color: vars.color.g800,
  '@media': {
    'screen and (min-width: 640px)': {
      maxWidth: 255,
    },
    'screen and (min-width: 1024px)': {
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
  height: 15,
  fontSize: 12,
  fontWeight: 700,
  marginTop: 5,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 21,
      fontSize: 18,
      marginTop: 10,
    },
  },
});

export const infoContainer = style({
  width: '100%',
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

export const containerSkeleton = style({
  height: 226,
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 338,
    },
  },
});

export const languageSkeleton = style({
  width: 40,
  height: 20,
  borderRadius: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 50,
      height: 24,
    },
  },
});

export const profileSkeleton = style({
  width: 16,
  height: 16,
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
