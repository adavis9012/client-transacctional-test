import {GET_MY_ACCOUNT, RECEIVE_MY_ACCOUNT} from '../constants/ActionTypes';

function requestMyAccount() {
    return {
        type: GET_MY_ACCOUNT
    };
}

function receiveMyAccount(response:Array<any>) {
    return {
        type: RECEIVE_MY_ACCOUNT,
        account: response
    };
}

function fetchMyAccount() {
    return (dispatch:any) => {
        return fetch('http://www.mocky.io/v2/5e4dc1562f0000670016a24d')
            .then(response => response.json())
            .then(response => dispatch(receiveMyAccount(response)))
            .catch(error => { console.error(error) });
    }
}

function shouldFetchMyAccount (state:any) {
    return !state.account.accounts && !state.isLoading;
}

export function fetchMyAccountIfNeeded() {
    return (dispatch:any, getState:any) => {
        if (shouldFetchMyAccount(getState())) {
            return dispatch(fetchMyAccount());
        }
    };
}
