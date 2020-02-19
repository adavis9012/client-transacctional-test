import React, {FunctionComponent} from 'react';
import './styles/Button.scss';

interface ButtonProps {
	onClick: () => void,
	children: string
}

const Button: FunctionComponent<ButtonProps> = (props => {
	return (
		<button className='button' onClick={props.onClick}>
			{props.children}
		</button>
	);
});

export default Button;
