import React, {FunctionComponent} from 'react';
import Movement, {MovementProps} from "../atoms/Movement";

interface MovementsProps {
	title?: string,
	movements: [MovementProps]
}

const Movements: FunctionComponent<MovementsProps> = (props) => {
	const movementList = props.movements.map((movement: MovementProps) => {
		return <Movement {...movement}>{movement.description}</Movement>;
	});

	return (<div>
		<h1>{props.title}</h1>
		<ul>
			{movementList}
		</ul>
	</div>);
}

export default Movements;
