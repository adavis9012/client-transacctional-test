import React from 'react';
import Accounts from '../Accounts';
import {storiesOf} from "@storybook/react";
import {MemoryRouter} from "react-router";

const accounts = [
    {
        "accountID": 1022,
        "accountType": "Cuenta de Ahorros",
        "state": "active",
        "availableValue": 999999
    },
    {
        "accountID": 1023,
        "accountType": "Visa Gold",
        "state": "active",
        "availableValue": 999999
    }
];

storiesOf('Organisms/Accounts', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>))
    .add('Default',
        () => <Accounts accounts={accounts}/>
);

