import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export default {
    title: 'Atoms/Button',
    component: Button
};

export const _default = () => (
    <>
        <h2>Default</h2>
        <pre>&lt;Button&gt; &lt;/Button&gt;</pre>
        <Button onClick={action('clicked')}>Hello Button</Button>
        <hr/>
        <h2>Bottom Form</h2>
        <pre>&lt;Button type="bottom-form"&gt; &lt;/Button&gt;</pre>
        <Button type="bottom-form" onClick={action('clicked')}>Hello Button</Button>
    </>
);
