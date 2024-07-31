import { style } from '@vanilla-extract/css';
import { vars } from '../../globalTheme.css';

export const bgOverlay = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(45deg, #2F90FF 0%, #04BEFF 100%)',
  opacity: 0.3,
});

export const mapContainer = style({
  position: 'absolute',
  display: 'inline-flex',
  width: 292,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 504,
    },
  },
});

export const mapText = style({
  color: vars.color.white,
  fontFamily: vars.font.menu,
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 48,
    },
  },
});

export const mapButton = style({
  padding: '10px 15px',
  marginTop: 20,
  color: vars.color.white,
  background: '#00C2FF',
  border: 0,
  borderRadius: 100,
  boxShadow: '0px 10px 20px 0px #0000000D',
  fontSize: 14,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '12px 20px',
      marginTop: 40,
      fontSize: 16,
    },
  },
});

export const highlight = style({
  color: vars.color.secondary,
  fontWeight: 700,
});

export const plain = style({
  position: 'relative',
  color: vars.color.black,
  fontWeight: 500,
  fontSize: 20,
  marginTop: 30,
  marginBottom: 20,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 30,
      marginBottom: 30,
    },
  },
});
