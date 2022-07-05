import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import LoadingReducer from "./reducers/LoadingReducer";

const rootReducer = combineReducers({
  reducers,
  LoadingReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
