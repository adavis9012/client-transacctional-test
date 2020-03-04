import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMovementsIfNeeded } from '../../services/actions/MovementsAction';
import Movements from '../molecules/Movements';

export const MovementsPage = (props: any) => {
  const { fetchMovementsIfNeeded } = props;
  const { data, error, isLoading } = props.movements;
  const { id } = useParams();

  const filteredData =
    Object.keys(data).length &&
    data.filter((el: any) => {
      return el.accountID?.toString() === id;
    });

  fetchMovementsIfNeeded();

  return (
    <section className="movements-page">
      {!isLoading && !error && (
        <Movements
          title={`Movimientos del producto ${id}`}
          movements={filteredData}
        />
      )}
    </section>
  );
};

const mapStateToProps = (state: any) => ({
  movements: state.movements
});

const mapDispatchToProps = { fetchMovementsIfNeeded };

export default connect(mapStateToProps, mapDispatchToProps)(MovementsPage);
