import { container } from '@/styles/components/common/button1.css';

type ButtonProps = {
  text: string;
  on: boolean;
  clickHandler: () => void;
};

const Button1 = ({ text, on, clickHandler }: ButtonProps) => {
  return (
    <div className={container({ on: on })} onClick={clickHandler}>
      {text}
    </div>
  );
};

export default Button1;
