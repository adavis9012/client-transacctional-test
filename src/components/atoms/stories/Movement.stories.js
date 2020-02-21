import React from "react";
import Movement, {ItemType} from "../Movement";

export default  {
    title: 'Atoms/Movement',
    component: Movement
};

export const _default = () => <ul>
    <Movement description="Default" />
    <Movement type={ItemType.income} transactionAmount={9999} description="Store A" />
    <Movement type={ItemType.outcome} transactionAmount={-9999} description="Store B" />
</ul>