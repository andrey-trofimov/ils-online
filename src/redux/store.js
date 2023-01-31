import { compose, configureStore } from "@reduxjs/toolkit";
import routeReducer from "./slices/routeSlice";
import createSagaMiddleware from "redux-saga";
import routeSaga from "./sagas/routeSaga";

const saga = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = configureStore({
  reducer: {
    route: routeReducer,
  },
  middleware: [saga],
  composeEnhancers,
});

saga.run(routeSaga);
