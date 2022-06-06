import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import LoadingReducer from "./reducers/LoadingReducer";
//midleware saga
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
const midlewareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
  reducers,
  LoadingReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk, midlewareSaga));

midlewareSaga.run(rootSaga);

export default store;
