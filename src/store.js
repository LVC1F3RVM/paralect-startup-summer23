import { combineReducers, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import jobsReducer from "./components/reducers/jobs";
import errorsReducer from "./components/reducers/errors";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  combineReducers({
    jobs: jobsReducer,
    errors: errorsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;
