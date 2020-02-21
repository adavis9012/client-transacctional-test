import {GET_MY_ACCOUNT, RECEIVE_MY_ACCOUNT} from '../constants/ActionTypes';

function requestMyAccount() {
    return {
        type: GET_MY_ACCOUNT
    };
}

function receiveMyAccount(response:Array<any>) {
    return {
        type: RECEIVE_MY_ACCOUNT,
        accounts: response
    };
}

function fetchMyAccount() {
    return (dispatch:any) => {
        return fetch('http://www.mocky.io/v2/5e4eefc03000007a00226721')
            .then(response => {
                return response.json();
            })
            .then(response => {
                return dispatch(receiveMyAccount(response));
            })
            .catch(error => { console.error(error) });
    }
}

function shouldFetchMyAccount (state:any) {
    return !Object.keys(state.accounts.data).length && state.accounts.isLoading;
}

export function fetchMyAccountIfNeeded() {
    return (dispatch:any, getState:any) => {
        if (shouldFetchMyAccount(getState())) {
            return dispatch(fetchMyAccount());
        }
    };
}
