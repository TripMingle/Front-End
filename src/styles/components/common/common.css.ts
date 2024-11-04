import { vars } from '@/styles/globalTheme.css';
import { keyframes, style } from '@vanilla-extract/css';

const pulse = keyframes({
  '0%': { opacity: 1 },
  '50%': { opacity: 0.5 },
  '100%': { opacity: 1 },
});

export const skeleton = style({
  background: vars.color.g200,
  color: vars.color.g200,
  animation: `${pulse} 1.5s ease-in-out infinite`,
});
