import { SVGProps } from 'react';

const House = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2265_1242)">
        <path
          d="M40.2529 20.1306C39.8797 20.1306 39.5024 20.0202 39.1865 19.7916L22.1076 7.5394C21.4801 7.08999 20.6024 7.08999 19.9748 7.5394L2.90002 19.7916C2.13713 20.3401 1.03791 20.2068 0.451387 19.4984C-0.139238 18.79 0.000215314 17.7693 0.767207 17.2247L17.842 4.97241C19.7287 3.62036 22.3619 3.62036 24.2445 4.97241L41.3235 17.2247C42.0863 17.7731 42.2258 18.79 41.6393 19.4984C41.2906 19.9135 40.7738 20.1306 40.2529 20.1306Z"
          fill="#00C2FF"
        />
        <path
          d="M33.239 38.3737H8.84697C5.94307 38.3737 3.58057 36.18 3.58057 33.4835V21.3455C3.58057 20.4505 4.36396 19.723 5.32783 19.723C6.2917 19.723 7.0751 20.4505 7.0751 21.3455V33.4835C7.0751 34.3899 7.8708 35.1288 8.84697 35.1288H33.2431C34.2192 35.1288 35.0149 34.3899 35.0149 33.4835V21.3455C35.0149 20.4505 35.7983 19.723 36.7622 19.723C37.7261 19.723 38.5095 20.4505 38.5095 21.3455V33.4835C38.5054 36.18 36.1429 38.3737 33.239 38.3737Z"
          fill="#3688FF"
        />
        <rect x="16" y="21" width="3" height="9" rx="1.5" fill="#00C2FF" />
        <rect x="23" y="21" width="3" height="9" rx="1.5" fill="#00C2FF" />
      </g>
      <defs>
        <clipPath id="clip0_2265_1242">
          <rect
            width="42"
            height="39"
            fill="white"
            transform="translate(0 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default House;
