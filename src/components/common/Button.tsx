import { container } from '@/styles/components/common/button.css';

type ButtonProps = {
  text: string;
  on: boolean;
  tab?: number;
  clickHandler: () => void;
};

const Button = ({ text, on, clickHandler, tab = 0 }: ButtonProps) => {
  return (
    <div
      className={container({ on: on })}
      onClick={clickHandler}
      tabIndex={tab}
    >
      {text}
    </div>
  );
};

export default Button;
