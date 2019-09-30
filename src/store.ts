import {applyMiddleware, createStore, Store} from "redux";
import thunk from 'redux-thunk';
import rootReducer, {RootState} from './reducers';

const configureStore = (): Store<RootState> => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk),
    )
};

export default configureStore;
