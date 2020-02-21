import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { MovementsReducer, MyAccountReducer } from '../reducers/index';

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({movements: MovementsReducer, accounts: MyAccountReducer});

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
}
