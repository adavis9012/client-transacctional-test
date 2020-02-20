import React from "react";
import Account from "../Account";

export default  {
    title: 'Molecules/Account',
    component: Account
};

const mockData = {
    accountID: 1021,
    accountType: 'Cuenta de Ahorros',
    state: 'active',
    availableValue: 999999
};

export const _default = () => <Account data={mockData} />;
