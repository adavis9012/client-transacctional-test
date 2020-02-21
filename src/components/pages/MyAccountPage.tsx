import React from 'react';
import { connect } from 'react-redux';
import { fetchMyAccountIfNeeded } from '../services/actions/MyAccountAction';
import Accounts from "../organisms/Accounts";

import './styles/MyAccountPage.scss';


export const MyAccountPage = (props:any) => {
    const { fetchMyAccountIfNeeded } = props;
    const { data, error, isLoading } = props.accounts;

    fetchMyAccountIfNeeded();

    return (
        <section className="my-accounts-page">
            <h1>Mi Cuenta</h1>
            <section className="account-wrapper">
                {(!isLoading && !error) && <Accounts accounts={data}/>}
            </section>
        </section>
    );
};

const mapSateToProps = (state:any) => ({
    accounts: state.accounts,
    error: state.error,
    isLoading: state.isLoading
});

const mapDispatchToProps = { fetchMyAccountIfNeeded };

export default connect(mapSateToProps, mapDispatchToProps)(MyAccountPage);