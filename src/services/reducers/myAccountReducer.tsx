import { GET_MY_ACCOUNT, RECEIVE_MY_ACCOUNT } from '../constants/ActionTypes';

const initialState = {
  data: {},
  error: false,
  isLoading: true
};

function MyAccountReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case GET_MY_ACCOUNT:
      return { ...state, isLoading: true };
    case RECEIVE_MY_ACCOUNT:
      return {
        ...state,
        data: action.accounts,
        isLoading: false
      };
    default:
      return state;
  }
}

export default MyAccountReducer;
