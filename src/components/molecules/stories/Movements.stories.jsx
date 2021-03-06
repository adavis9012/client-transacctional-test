import React from 'react';
import { storiesOf } from '@storybook/react';
import Movements from '../Movements';

const movements = [
  {
    id: 1,
    accountID: 1022,
    accountType: 'Cuenta de Ahorros',
    transactionAmount: 1230000,
    type: 'income',
    description: 'Airbnb transaction'
  },
  {
    id: 2,
    accountID: 1022,
    accountType: 'Cuenta de Ahorros',
    transactionAmount: 4560000,
    type: 'income',
    description: 'Rental Car transaction'
  },
  {
    id: 3,
    accountID: 1023,
    accountType: 'Visa Gold',
    transactionAmount: 45600,
    type: 'outcome',
    description: 'Google Market'
  },
  {
    id: 4,
    accountID: 1022,
    accountType: 'Cuenta de Ahorros',
    transactionAmount: 723600,
    type: 'income',
    description: 'Cloths and more Stuffs'
  },
  {
    id: 5,
    accountID: 1023,
    accountType: 'Visa Gold',
    transactionAmount: 15600,
    type: 'outcome',
    description: 'Meals and Beverages'
  }
];

storiesOf('Molecules/Movements', module).add('Default', () => (
  <Movements title="Mock Movements" movements={movements} />
));
