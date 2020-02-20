import React, {FunctionComponent} from 'react';
import {Currency} from "../hoc/";
import classNames from 'classnames';
import './styles/Movement.scss';

interface Props {
	amount: number,
	key: string,
	type: string
}

export const ItemType: {[key: string]: string} = {
	credit: 'credit',
	debit: 'debit',
	pending: 'pending',
	undefined: 'undefined'
};

const Movement: FunctionComponent<Props> = props => {
	const classItem = classNames('list-item',
		isValidType(props.type) && `list-item--${props.type}`
	);

	return (<li className={classItem}>
		<p className="list-item_head">{props.children}</p>
		<p className="list-item_content">
			<Currency type="COP">
				{props.amount}
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
