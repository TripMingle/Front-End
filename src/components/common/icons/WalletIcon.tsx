import { SVGProps } from 'react';

const WalletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.625 6.25H7.875"
        stroke={props.color}
        strokeWidth="1.02632"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6771 7.0625H14.5625C13.1128 7.0625 11.9375 8.15377 11.9375 9.5C11.9375 10.8462 13.1128 11.9375 14.5625 11.9375H16.6771C16.7448 11.9375 16.7786 11.9375 16.8072 11.9358C17.2454 11.9091 17.5944 11.585 17.6231 11.1781C17.625 11.1516 17.625 11.1201 17.625 11.0573V7.94268C17.625 7.87987 17.625 7.8484 17.6231 7.82186C17.5944 7.41499 17.2454 7.09091 16.8072 7.06424C16.7786 7.0625 16.7448 7.0625 16.6771 7.0625Z"
        stroke={props.color}
        strokeWidth="1.02632"
      />
      <path
        d="M16.7841 7.0625C16.7209 5.54126 16.5172 4.60855 15.8606 3.9519C14.9087 3 13.3766 3 10.3125 3H7.875C4.81087 3 3.27881 3 2.3269 3.9519C1.375 4.90381 1.375 6.43587 1.375 9.5C1.375 12.5641 1.375 14.0962 2.3269 15.0481C3.27881 16 4.81087 16 7.875 16H10.3125C13.3766 16 14.9087 16 15.8606 15.0481C16.5172 14.3915 16.7209 13.4587 16.7841 11.9375"
        stroke={props.color}
        strokeWidth="1.02632"
      />
      <path
        d="M14.3679 9.5H14.3765"
        stroke={props.color}
        strokeWidth="1.02632"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WalletIcon;
