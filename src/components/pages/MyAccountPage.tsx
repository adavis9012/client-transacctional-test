import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchMyAccountIfNeeded } from '../services/actions/MyAccountAction';
import Account from '../organisms/Accounts';

export const MyAccountPage = (props:any) => {
    const { account, error, isLoading, fetchMyAccountIfNeeded } = props;

    fetchMyAccountIfNeeded();

    return (
        <section className="my-accounts-page">{JSON.stringify(account)}
        </section>
    )
};

const mapSateToProps = (state:any) => ({
    account: state.account,
    error: state.error,
    isLoading: state.isLoading
});

const mapDispatchToProps = { fetchMyAccountIfNeeded };

export default connect(mapSateToProps, mapDispatchToProps)(MyAccountPage);