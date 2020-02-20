import React, {FunctionComponent} from 'react';
import classNames from "classnames";
import './styles/Button.scss';

interface ButtonProps {
	onClick: () => void,
	className: string,
	children: string
}

const Button: FunctionComponent<ButtonProps> = (props => {
	const className = classNames(
		props.className,
		'button'
	);

	return (
		<button className={className } onClick={props.onClick}>
			{props.children}
		</button>
	);
});

export default Button;
