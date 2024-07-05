import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';

export const bgOverlay = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(45deg, #2F90FF 0%, #04BEFF 100%)',
  opacity: 0.3,
});

export const mapContainer = style({
  position: 'relative',
  display: 'inline-flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  flexDirection: 'column',
  alignItems: 'center',
});

export const mapText = style({
  color: vars.color.white,
  fontFamily: vars.font.menu,
  fontSize: 48,
  fontWeight: 'bold',
  textAlign: 'center',
});

export const mapButton = style({
  padding: '12px 20px',
  marginTop: 40,
  color: vars.color.white,
  background: '#00C2FF',
  border: 0,
  borderRadius: 100,
  boxShadow: '0px 10px 20px 0px #0000000D',
  fontSize: 16,
});

export const highlight = style({
  color: vars.color.secondary,
  fontWeight: 700,
});

export const plain = style({
  position: 'relative',
  color: vars.color.black,
  fontWeight: 500,
  fontSize: 30,
  marginTop: 30,
  marginBottom: 30,
});
