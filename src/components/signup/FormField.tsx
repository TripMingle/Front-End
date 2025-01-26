import {
  fieldContainer,
  title as t,
  red,
  fieldInput,
  error,
} from '@/styles/signup/page.css';

type FormFieldProps = {
  title: string;
  required?: boolean;
  children: React.ReactNode;
};

const FormField = ({ title, required = false, children }: FormFieldProps) => {
  return (
    <div className={fieldContainer}>
      <p className={t}>
        {required && <span className={red}>*</span>}
        {title}
      </p>
      <div className={fieldInput}>{children}</div>
    </div>
  );
};

export default FormField;
