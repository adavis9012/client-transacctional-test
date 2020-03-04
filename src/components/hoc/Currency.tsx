import React, { FunctionComponent } from 'react';

interface Props {
  children: number;
  type: string;
}

const Currency: FunctionComponent<Props> = props => {
  const { type, children } = props;

  return (
    <>
      {new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: type
      }).format(children)}
    </>
  );
};

Currency.defaultProps = {
  children: 0,
  type: 'COP'
};

export default Currency;
