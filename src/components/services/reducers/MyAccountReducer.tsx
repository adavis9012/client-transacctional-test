import {GET_MY_ACCOUNT, RECEIVE_MY_ACCOUNT} from '../constants/ActionTypes';

const initialState = {
    accounts: {},
    error: false,
    isLoading: true
};

function rootReducer(state: any = initialState, action:any) {
    switch (action.type) {
        case GET_MY_ACCOUNT:
            return Object.assign({}, state, {
                isLoading: true
            });
        case RECEIVE_MY_ACCOUNT:
            return Object.assign({}, state, {
                accounts: action.accounts,
                isLoading: false
            });
        default:
            return state;
    }
}

export default rootReducer;