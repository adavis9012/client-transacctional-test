import React, {FunctionComponent} from 'react';
import {Currency} from "../hoc";
import './styles/Account.scss'
import Button from "../atoms/Button";
import {useHistory} from "react-router";

export interface AccountData {
	accountID?: number,
	accountType?: string,
	state?: string,
	availableValue?: number
}

interface Props {
	data: AccountData
}

const Account: FunctionComponent<Props> = (props) => {
	const data = props.data;
	const value = data.availableValue || 0;
	const history = useHistory();

	function handleDetailsClick () {
		history.push(`/movimiento/${data.accountID}`);
	}

	return (<div className="account">
		<small className="account_description">{data.accountID} - {data.accountType}</small>
		<p className="account_value">
			<Currency type="COP">{value}</Currency>
		</p>
		<p className="account_state">{data.state === 'active' ? 'Activo' : 'No Activo'}</p>
		<Button className="account_button" onClick={handleDetailsClick}>Ver Detalles</Button>
	</div>);
};

export default Account;
