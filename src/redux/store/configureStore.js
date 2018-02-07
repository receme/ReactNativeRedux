import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import loggingMiddleware from '../middleware/logging';

const configureStore = (initialState: Object) => {
    const middleware = applyMiddleware(thunk, loggingMiddleware);
    return createStore(reducers, initialState, middleware);
};

export default configureStore;