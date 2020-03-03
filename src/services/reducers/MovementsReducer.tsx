import {GET_MOVEMENTS, RECEIVE_MOVEMENTS} from '../constants/ActionTypes';

const initialState = {
    data: {},
    error: false,
    isLoading: true
};

function MovementsReducer(state: any = initialState, action:any) {
    switch (action.type) {
        case GET_MOVEMENTS:
            return Object.assign({}, state, {
                isLoading: true
            });
        case RECEIVE_MOVEMENTS:
            return Object.assign({}, state, {
                data: action.movements,
                isLoading: false
            });
        default:
            return state;
    }
}

export default MovementsReducer;