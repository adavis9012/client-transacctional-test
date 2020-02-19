import React, {FunctionComponent} from "react";

interface Props {
    children: number,
    type: string
}

const Currency: FunctionComponent<Props> = props => <>
    {new Intl.NumberFormat('es-CO', {style: 'currency', currency: props.type}).format(props.children)}
</>;

Currency.defaultProps = {
    children: 0,
    type: "COP"
};

export default Currency;

