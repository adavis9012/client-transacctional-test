import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchMyAccountIfNeeded } from '../services/actions/MyAccountAction';
import Accounts from "../organisms/Accounts";

export const MyAccountPage = (props:any) => {
    const { accounts, error, isLoading, fetchMyAccountIfNeeded } = props;

    fetchMyAccountIfNeeded();

    return (
        <section className="my-accounts-page">
            {JSON.stringify(accounts)}
            {(!isLoading && !error) && <Accounts accounts={accounts}/>}
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