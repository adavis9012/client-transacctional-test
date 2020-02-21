import { RECEIVE_MOVEMENTS} from '../constants/ActionTypes';

function receiveMovements(response:Array<any>) {
    return {
        type: RECEIVE_MOVEMENTS,
        movements: response
    };
}

function fetchMovements() {
    return (dispatch:any) => {
        return fetch('http://www.mocky.io/v2/5e4f56b83000005100226845')
            .then(response => {
                return response.json();
            })
            .then(response => {
                return dispatch(receiveMovements(response));
            })
            .catch(error => { console.error(error) });
    }
}

function shouldFetchMovements (state:any) {
    return !Object.keys(state.movements.data).length && state.movements.isLoading;
}

export function fetchMovementsIfNeeded() {
    return (dispatch:any, getState:any) => {
        if (shouldFetchMovements(getState())) {
            return dispatch(fetchMovements());
        }
    };
}
