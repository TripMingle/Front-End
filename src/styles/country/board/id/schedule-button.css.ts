import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

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

export const scheduleButton = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'center',
  padding: '12px 16px',
  borderRadius: '8px',
  border: `none`,
  backgroundColor: vars.color.g200,
  cursor: 'pointer',
  marginTop: '5px',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '16px 20px',
      marginTop: '10px',
    },
  },
});

export const dateContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 16,
    },
  },
});

export const calendarIcon = style({
  width: 18,
  height: 18,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 20,
      height: 20,
    },
  },
});

export const dateText = style({
  color: vars.color.g600,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const explain = style({
  color: vars.color.g500,
  fontSize: 11,
  fontWeight: 500,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 12,
    },
  },
});
