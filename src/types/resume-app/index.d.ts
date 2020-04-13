import { Action, CombinedState, Observable, Store } from "redux";
import { Dispatch, Reducer } from "react";
import { Task, Unsubscribe, Saga } from "redux-saga";

declare module "resume-app" {
    interface ObjectLiteral {
        [x: string]: any;
    }
    interface PageState {
        loading: boolean;
        showSideNav: boolean;
    }

    interface Lists {
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }

    interface ListState {
        lists: Lists[]
    }

    interface UserState {
        token: string;
        id: number;
        firstName: string;
        secondName: string;
        lastName: string;
        secondLastName: string;
        email: string;
    }

    interface AppAction<T = string, P = any> extends Action {
        type: T;
        payload: P;
    }

    interface AppState {
        user: UserState;
        app: PageState;
        lists: ListState;
    }

    interface LoginStateToProps {
        isLogIn: boolean;
    }

    interface PageStateToProps {
        isAuth: boolean;
    }

    interface LoginCredential extends ObjectLiteral {
        email: string;
        password: string;
    }

    interface ConfigureStore extends Store {
        runSaga: <S extends Saga<any[]>>(saga: S, ...args: Parameters<S>) => Task;
    }

    interface RegisterCredentials extends ObjectLiteral {
        firstName: string;
        secondName: string;
        lastName: string;
        secondLastName: string;
        email: string;
        password: string;
        password2: string;
    }
}
