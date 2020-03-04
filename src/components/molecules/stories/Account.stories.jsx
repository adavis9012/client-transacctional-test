import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import Account from '../Account';

const mockData = {
  accountID: 1021,
  accountType: 'Cuenta de Ahorros',
  state: 'active',
  availableValue: 999999
};

storiesOf('Molecules/Account', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => <Account data={mockData} />)
