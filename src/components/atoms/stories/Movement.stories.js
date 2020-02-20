import React from "react";
import Movement, {ItemType} from "../Movement";

export default  {
    title: 'Atoms/Movement',
    component: Movement
};

export const _default = () => <ul>
    <Movement description="Default" />
    <Movement type={ItemType.debit} transactionAmount={9999} description="Store A (Debit)" />
    <Movement type={ItemType.credit} transactionAmount={-9999} description="Store A (Debit)" />
    <Movement type={ItemType.pending} transactionAmount={9999} description="Store A (Debit)" />
</ul>