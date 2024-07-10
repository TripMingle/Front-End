import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const buttonContainer = style({
  position: 'relative',
  display: 'flex',
  left: '50%',
  width: 104,
  padding: '10px 15px',
  marginTop: 20,
  color: vars.color.white,
  background: vars.color.secondary,
  border: 0,
  borderRadius: 5,
  gap: 5,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  transform: 'translate(-50%, 0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 260,
      padding: '12px 0px',
      marginTop: 60,
      fontSize: 16,
    },
  },
});

export const icon = style({
  width: 15,
  height: 15,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 20,
      height: 20,
    },
  },
});
