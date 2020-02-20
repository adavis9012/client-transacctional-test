import React, {FunctionComponent} from 'react';
import {Currency} from "../hoc";
import './styles/Account.scss'

interface Props {
	data: {
		accountID?: number,
		accountType?: string,
		state?: string,
		availableValue?: number
	}
}

const Account: FunctionComponent<Props> = (props) => {
	const data = props.data;
	const value = data.availableValue || 0;

	return (<div className="account">
		<small className="account_description">{data.accountID} - {data.accountType}</small>
		<p className="account_value">
			<Currency type="COP">{value}</Currency>
		</p>
		<p className="account_state">{data.state === 'active' ? 'Activo' : 'No Activo'}</p>
		<a className="account_link" href="">Ver detalles</a>
	</div>);
};

export default Account;
