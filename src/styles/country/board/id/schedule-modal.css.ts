import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const closeButton = style({
  position: 'absolute',
  right: 20,
  top: 20,
  fontSize: 16,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
      right: 32,
      top: 32,
    },
  },
});

export const contentContainer = style({
  display: 'flex',
  width: 'calc(100vw - 80px)',
  maxWidth: 720,
  maxHeight: 720,
  flexDirection: 'column',
  boxSizing: 'border-box',
  height: 'calc(100vh -  240px)',
});

export const title = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  fontSize: 18,
  fontWeight: 700,
  color: vars.color.g700,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 20,
    },
  },
});

export const infoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: 12,
  margin: '12px 0px',
  color: vars.color.g600,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1,
  background: vars.color.g200,
  borderRadius: 12,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 15,
      gap: 16,
    },
  },
});

export const icon = style({
  width: 18,
  height: 18,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 20,
      height: 20,
    },
  },
});

export const date = style({
  fontSize: 16,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 20,
    },
  },
});

export const mapContainer = style({
  width: '100%',
  height: 200,
  flexShrink: 0,
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 240,
    },
  },
});

export const scheduleContainer = style({
  marginTop: 16,
  flexGrow: 1,
  overflowY: 'scroll',
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 20,
    },
  },
});
