import { legacy_createStore,combineReducers, applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"
import {Reducer as AppReducer} from "./AppReducer/Reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({AppReducer})
const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
export {store}