import {createStore , applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk'
import docVerifyReducer from './reducers/docVerifyReducer'
import rootReducers from './reducers'

const initialState = {};
const middleware =  [thunk];

const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        //THIS CODE WILL ENABLE
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
);


export default store