import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export default {
    title: 'Atom/Button',
    component: Button
};

export const _default = () => <Button onClick={action('clicked')}>Hello Button</Button>;
