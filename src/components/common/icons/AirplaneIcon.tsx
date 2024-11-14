import { SVGProps } from 'react';

const PersonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.99609 17.2072V19.5C3.99609 19.7761 4.21994 20 4.49609 20H6.79386C6.92647 20 7.05365 19.9473 7.14742 19.8536L16.5952 10.4058L13.5945 7.40518L4.1426 16.8535C4.04879 16.9473 3.99609 17.0745 3.99609 17.2072Z"
        fill={props.color}
      />
      <path
        d="M14.832 6.16694L17.8325 9.16735L19.2927 7.70711C19.6832 7.31659 19.6832 6.68342 19.2927 6.2929L17.7068 4.70698C17.3163 4.31651 16.6832 4.31645 16.2927 4.70685L14.832 6.16694Z"
        fill={props.color}
      />
    </svg>
  );
};

export default PersonIcon;
