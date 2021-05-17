import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

export default function configureStore() {
  const devTool = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose;

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), devTool)
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers").default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}