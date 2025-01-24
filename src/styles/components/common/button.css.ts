import { vars } from '@/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    width: '100%',
    height: 44,
    color: vars.color.g500,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: 14,
    borderRadius: 10,
    cursor: 'pointer',
    boxSizing: 'border-box',
    '@media': {
      'screen and (min-width: 1024px)': {
        fontSize: 16,
        height: 48,
      },
    },
  },
  variants: {
    on: {
      true: {
        color: vars.color.secondary,
        border: `1px solid ${vars.color.secondary}`,
      },
      false: { border: `1px solid ${vars.color.g300}` },
    },
  },
});
