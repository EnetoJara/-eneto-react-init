// / <reference types="redux" />

import { Action } from "redux";

declare module "resume-app" {
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
    }

    interface LoginCredentials {
        email: string;
        password: string;
    }

    interface RegisterCredentials {
        firstName: string;
        secondName: string;
        lastName: string;
        secondLastName: string;
        email: string;
        password: string;
        password2: string;
    }
}
