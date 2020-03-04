import React from 'react';
import Movement, { ItemType } from '../Movement';

export default {
  title: 'Atoms/Movement',
  component: Movement
};

export const _default = () => (
  <ul>
    <Movement description="Default" key="movement1" />
    <Movement
      type={ItemType.income}
      transactionAmount={9999}
      description="Store A"
      key="movement2"
    />
    <Movement
      type={ItemType.outcome}
      transactionAmount={-9999}
      description="Store B"
      key="movement3"
    />
  </ul>
);
