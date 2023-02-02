import { createStore } from "redux";

import { CombineReducer } from "./../reducer/combineReducer";

export const store = createStore(
  CombineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
