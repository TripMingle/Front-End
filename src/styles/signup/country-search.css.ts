// 나라 검색 방식을 모달->드롭다운으로 변경하면서 CountryBoxList를 사용하게됨.

// import { style } from '@vanilla-extract/css';
// import { vars } from '../globalTheme.css';
// import { recipe } from '@vanilla-extract/recipes';

// export const modalContainer = style({
//   position: 'relative',
//   display: 'flex',
//   width: 'calc(100vw - 40px)',
//   maxWidth: 380,
//   height: 'calc(100vh - 60px)',
//   maxHeight: 420,
//   gap: 20,
//   flexDirection: 'column',
//   borderRadius: 20,
//   background: vars.color.white,
//   boxSizing: 'border-box',
//   '@media': {
//     'screen and (min-width: 1024px)': {
//       maxHeight: 560,
//     },
//   },
// });

// export const titleContainer = style({
//   display: 'flex',
//   alignItems: 'center',
// });

// export const title = style({
//   fontSize: 16,
//   fontWeight: 700,
//   flex: 1,
//   '@media': {
//     'screen and (min-width: 1024px)': {
//       fontSize: 18,
//     },
//   },
// });

// export const closeIcon = style({
//   width: 14,
//   height: 14,
//   cursor: 'pointer',
//   '@media': {
//     'screen and (min-width: 1024px)': {
//       width: 15,
//       height: 15,
//     },
//   },
// });

// export const inputContainer = style({
//   display: 'flex',
//   padding: '12px 20px',
//   borderRadius: 10,
//   border: `1px solid ${vars.color.g200}`,
//   alignItems: 'center',
//   '@media': {
//     'screen and (min-width: 1024px)': {
//       padding: '15px 20px',
//     },
//   },
// });

// export const input = style({
//   outline: 'none',
//   border: 'none',
//   flex: 1,
//   fontSize: 14,
//   '@media': {
//     'screen and (min-width: 1024px)': {
//       width: 15,
//       height: 15,
//       fontSize: 16,
//     },
//   },
// });

// export const searchIcon = style({
//   width: 20,
//   height: 20,
//   cursor: 'pointer',
//   '@media': {
//     'screen and (min-width: 1024px)': {
//       width: 24,
//       height: 24,
//     },
//   },
// });

// export const countryContainer = style({
//   display: 'flex',
//   flex: 1,
//   zIndex: 10,
//   gap: 2,
//   padding: 2,
//   flexDirection: 'column',
//   overflow: 'scroll',
//   border: `1px solid ${vars.color.g200}`,
//   borderRadius: 10,
// });

// export const country = recipe({
//   base: {
//     padding: '10px 20px',
//     cursor: 'pointer',
//     fontSize: 14,
//     fontWeight: 400,
//     color: vars.color.black,
//     borderRadius: 10,
//     '@media': {
//       'screen and (min-width: 1024px)': {
//         fontSize: 16,
//       },
//     },
//     ':hover': {
//       background: vars.color.g200,
//     },
//   },
//   variants: {
//     select: {
//       true: {
//         color: vars.color.secondary,
//         fontWeight: 700,
//         background: vars.color.g200,
//       },
//     },
//   },
// });

// export const button = recipe({
//   base: {
//     border: 'none',
//     height: 42,
//     borderRadius: 10,
//     '@media': {
//       'screen and (min-width: 1024px)': {
//         height: 52,
//       },
//     },
//   },
//   variants: {
//     select: {
//       true: {
//         background: vars.color.secondary,
//         color: vars.color.white,
//         cursor: 'pointer',
//       },
//       false: { background: vars.color.g200, color: vars.color.g400 },
//     },
//   },
// });
