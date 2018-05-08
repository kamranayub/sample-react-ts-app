import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import initialState, { State } from './';
import rootReducer from "./reducer";

export function configureStore() {
    return createStore<State>(
        rootReducer,
        initialState,
        compose(applyMiddleware(thunk))
    );
}