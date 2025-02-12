import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const background = style({
  display: 'flex',
  width: '100%',
  height: 'calc(100vh - 44px)',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 'calc(100vh - 60px)',
    },
  },
});

export const errorText = style({
  fontFamily: vars.font.menu,
  fontSize: 52,
  fontWeight: 300,
  color: vars.color.secondary,
  marginBottom: 20,
});

export const title = style({
  fontSize: 20,
  fontWeight: 600,
});

export const message = style({
  fontSize: 14,
  marginBottom: 20,
});

export const button = style({
  width: 200,
  padding: '12px 20px',
  fontWeight: 600,
  color: vars.color.white,
  background: vars.color.secondary,
  borderRadius: 10,
});

export const errorboundary = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 700,
  color: vars.color.g700,
  gap: 12,
});

export const retry = style({
  padding: '12px 20px',
  background: '#d3e5ff',
  color: vars.color.secondary,
  fontWeight: 600,
  borderRadius: 8,
});
