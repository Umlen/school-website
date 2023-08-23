import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  btnText: string;
}

const Button:FunctionComponent<ButtonProps> = ( {btnText, ...props} ) => {
  return (
    <button
      {...props}
    >
      {btnText}
    </button>
  );
};

export default Button;
