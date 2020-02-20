import React, {FunctionComponent} from 'react';
import Account, {AccountData} from "../molecules/Account";
import './styles/Accounts.scss';

interface Props {
	accounts: [AccountData]
}

const Accounts: FunctionComponent<Props> = (props) => {
	const accountList =  props.accounts.map((data: AccountData) => {
		return <Account key={`account-${data.accountID}`} data={data}/>;
	});

	return(<div className="accounts">
		{accountList}
	</div>);
};

export default Accounts;
