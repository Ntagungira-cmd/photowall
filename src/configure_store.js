import { createStore } from "redux";
import { postReducer } from "./redux/reducers";
let store = createStore(
  postReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
