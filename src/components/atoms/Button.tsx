import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import './styles/Button.scss';

interface ButtonProps {
onClick: () => void,
className: string,
children: string,
type?: string
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const {
    className, type, onClick, children,
  } = props;
  const classes = classNames(
    className,
    'button',
    type && `button_${type}`,
  );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
