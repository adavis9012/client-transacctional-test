import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchMyAccountIfNeeded } from '../services/actions/MyAccountAction';
import Accounts from "../organisms/Accounts";
import Header from "../organisms/Header";
import './styles/MyAccountPage.scss';


export const MyAccountPage = (props:any) => {
    const { accounts, error, isLoading, fetchMyAccountIfNeeded } = props;

    fetchMyAccountIfNeeded();

    return (
        <section className="my-accounts-page">
            <Header />
            <section className="account-wrapper">
                {(!isLoading && !error) && <Accounts accounts={accounts}/>}
            </section>
        </section>
    )
};

const mapSateToProps = (state:any) => ({
    accounts: state.accounts,
    error: state.error,
    isLoading: state.isLoading
});

const mapDispatchToProps = { fetchMyAccountIfNeeded };

export default connect(mapSateToProps, mapDispatchToProps)(MyAccountPage);