import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { AppState } from "resume-app";
import { initUserState } from "../../modules/users/users-reducer";
import { rootReducer } from "../reducers";

const state: AppState = {
    user: initUserState
};

function configureStore (initialState: AppState) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    return {
        ...createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))),
        runSaga: sagaMiddleware.run
    };
}

export const store = configureStore(JSON.parse(localStorage.getItem("initApp") || JSON.stringify(state)));
