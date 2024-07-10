import { SVGProps } from 'react';

const FoodIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.85443 8.30051C3.55935 7.00543 3.55935 4.96319 4.85443 3.66811L10.3834 9.1971L12.2264 11.0401L15.0656 13.8793C15.5637 14.3774 15.5637 15.1246 15.0656 15.6227C14.5675 16.1208 13.6709 16.1208 13.2226 15.5231L11.1804 12.9827C10.6823 12.3352 9.7857 12.1359 8.98872 12.4348L4.85443 8.30051Z"
        stroke={props.color}
        stroke-width="0.838918"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.2264 7.60316L14.9162 4.91338"
        stroke={props.color}
        stroke-width="0.838918"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.1306 9.94427C11.3299 9.89446 11.4793 9.89446 11.6785 9.84465C12.3261 9.79484 13.0732 9.44616 13.8204 8.699L16.2611 6.25827"
        stroke={props.color}
        stroke-width="0.838918"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.74351 11.1895L4.25675 14.0288C3.70883 14.4272 3.65902 15.2242 4.15713 15.6725C4.65524 16.1706 5.4024 16.071 5.80089 15.5729L8.6401 12.0363"
        stroke={props.color}
        stroke-width="0.838918"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5713 3.5685L11.0808 6.00922C10.3336 6.75639 9.93513 7.50355 9.93513 8.15109C9.93513 8.35033 9.88532 8.49976 9.83551 8.69901"
        stroke={props.color}
        stroke-width="0.838918"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FoodIcon;
