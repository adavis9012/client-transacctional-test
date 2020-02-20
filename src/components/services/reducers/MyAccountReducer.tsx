import {GET_MY_ACCOUNT, RECEIVE_MY_ACCOUNT} from '../constants/ActionTypes';

const initialState = {
    account: {},
    error: false,
    isLoading: false
};

function rootReducer(state: any = initialState, action:any) {
    switch (action.type) {
        case GET_MY_ACCOUNT:
            return Object.assign({}, state, {
                isLoading: true
            });
        case RECEIVE_MY_ACCOUNT:
            return Object.assign({}, state, {
                account: action.account,
                isLoading: false
            });
        default:
            return state;
    }
}

export default rootReducer;