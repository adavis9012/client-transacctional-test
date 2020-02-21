import React, {FunctionComponent} from 'react';
import {Currency} from "../hoc/";
import classNames from 'classnames';
import './styles/Movement.scss';

export interface MovementProps {
	description: string,
	transactionAmount: number,
	key: string,
	type: string
}

export const ItemType: {[key: string]: string} = {
	income: 'income',
	outcome: 'outcome',
	undefined: 'undefined'
};

const Movement: FunctionComponent<MovementProps> = props => {
	const classItem = classNames('list-item',
		isValidType(props.type) && `list-item--${props.type}`
	);

	return (<li className={classItem}>
		<p className="list-item_head">{props.description}</p>
		<p className="list-item_content">
			<Currency type="COP">
				{props.transactionAmount}
			</Currency>
		</p>
	</li>);

	function isValidType(type:string) {
		return (typeof type !== 'undefined' && type !== 'undefined');
	}
};

Movement.defaultProps = {
	type: ItemType.undefined
};

export default Movement;
