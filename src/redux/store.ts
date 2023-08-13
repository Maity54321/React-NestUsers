import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./rootReducer";
import userSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(userSaga);

export default store;
