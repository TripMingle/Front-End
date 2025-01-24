import { container } from '@/styles/components/common/button.css';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  on: boolean;
}

const Button = ({ on, children, ...props }: ButtonProps) => {
  return (
    <button className={container({ on })} {...props}>
      {children}
    </button>
  );
};

export default Button;
