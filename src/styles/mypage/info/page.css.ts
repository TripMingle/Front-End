import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
});

export const fieldContainer = style({
  position: 'relative',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
});

export const fieldTitle = style({
  width: 60,
  fontSize: 14,
  color: vars.color.g500,
  fontWeight: 400,
});

export const fieldValue = style({
  fontSize: 14,
  color: vars.color.g800,
  padding: 12,
  width: 240,
  boxSizing: 'border-box',
  border: `1px solid ${vars.color.g300}`,
  borderRadius: 12,
});
