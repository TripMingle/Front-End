import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  position: 'relative',
  top: 44,
  left: '50%',
  transform: 'translate(-50%,0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 60,
      maxWidth: 1920,
    },
  },
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  height: 280,
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 460,
    },
  },
});

export const image = style({
  objectFit: 'cover',
});

export const container = style({
  position: 'relative',
  display: 'flex',
  left: '50%',
  transform: 'translate(-50%,0)',
  flexDirection: 'column',
  '@media': {
    'screen and (min-width: 1024px)': {
      flexDirection: 'row',
    },
  },
});

export const contentContainer = style({
  width: '100%',
  maxWidth: 720,
  padding: '30px 20px',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '50px 20px 50px 20px',
    },
  },
});

export const title = style({
  fontWeight: 700,
  color: vars.color.black,
  marginTop: 5,
  fontSize: 20,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 10,
      fontSize: 36,
    },
  },
});

export const iconContainer = style({
  marginTop: 8,
  marginRight: 20,
  display: 'inline-flex',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 12,
      marginRight: 30,
    },
  },
});

export const icon = style({
  marginRight: 5,
  width: 18,
  height: 18,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginRight: 10,
      width: 20,
      height: 20,
    },
  },
});

export const infoContainer = style({
  display: 'flex',
  marginTop: 24,
  flexDirection: 'column',
  gap: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 40,
      gap: 10,
    },
  },
});

export const infoTitle = style({
  fontSize: 14,
  fontWeight: 500,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
    },
  },
});

export const infoItem = style({
  display: 'inline-flex',
  gap: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 10,
    },
  },
});
