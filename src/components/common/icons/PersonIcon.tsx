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
        d="M12.0008 10.4C13.7681 10.4 15.2008 8.96731 15.2008 7.2C15.2008 5.43269 13.7681 4 12.0008 4C10.2335 4 8.80078 5.43269 8.80078 7.2C8.80078 8.96731 10.2335 10.4 12.0008 10.4Z"
        fill={props.color}
      />
      <path
        d="M18.3996 16.4C18.3996 18.3882 18.3996 20 11.9996 20C5.59961 20 5.59961 18.3882 5.59961 16.4C5.59961 14.4118 8.46499 12.8 11.9996 12.8C15.5342 12.8 18.3996 14.4118 18.3996 16.4Z"
        fill={props.color}
      />
    </svg>
  );
};

export default PersonIcon;
