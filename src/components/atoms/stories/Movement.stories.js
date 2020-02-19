import React from "react";
import Movement, {ItemType} from "../Movement";

export default  {
    title: 'Atom/Movement',
    component: Movement
};

export const _default = () => <ul>
    <Movement>Default</Movement>
    <Movement type={ItemType.debit} amount={9999}>Store A (Debit)</Movement>
    <Movement type={ItemType.credit} amount={-9999}>Store B (Credit)</Movement>
    <Movement type={ItemType.pending} amount={9999}>Store C (Pending)</Movement>
</ul>