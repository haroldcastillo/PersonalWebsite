// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { createLogger } from "redux-logger";

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the logger middleware
const loggerMiddleware = createLogger({
    predicate: (getState, action) => import.meta.env.MODE === "development", // Use Vite's environment variable
    // Add other options here if needed
});

// Configure the store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(
            sagaMiddleware,
            loggerMiddleware
        ),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
