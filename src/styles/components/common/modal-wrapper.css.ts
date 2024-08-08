import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const background = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 110,
});

export const modal = style({
  position: 'relative',
  display: 'flex',
  padding: 30,
  gap: 20,
  flexDirection: 'column',
  borderRadius: 20,
  background: vars.color.white,
});
