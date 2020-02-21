import {GET_MOVEMENTS, RECEIVE_MOVEMENTS} from '../constants/ActionTypes';

function requestMovements() {
    return {
        type: GET_MOVEMENTS
    };
}

function receiveMovements(response:Array<any>) {
    return {
        type: RECEIVE_MOVEMENTS,
        movements: response
    };
}

function fetchMovements() {
    return (dispatch:any) => {
        return fetch('http://www.mocky.io/v2/5e4dc4fe2f0000490016a25b')
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
