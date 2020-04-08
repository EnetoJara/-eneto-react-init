import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { ConfigureStore } from "resume-app";
import { rootReducer } from "../reducers";

export function configureStore<AppState> (initialState: AppState): ConfigureStore {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const { run } = sagaMiddleware;
    return {
        ...createStore(rootReducer, initialState, applyMiddleware(...middleware)),
        runSaga: run,
    };
}
