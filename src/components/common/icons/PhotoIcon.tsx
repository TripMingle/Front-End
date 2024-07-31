import { SVGProps } from 'react';

const PhotoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 9C7.32843 9 8 8.32845 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32845 5.67157 9 6.5 9Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 16C9.32899 7.20398 12.9274 5.66286 17 11.3694"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3H5C3.34314 3 2 4.2934 2 5.88889V13.1111C2 14.7066 3.34314 16 5 16H14C15.6568 16 17 14.7066 17 13.1111V5.88889C17 4.2934 15.6568 3 14 3Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PhotoIcon;
