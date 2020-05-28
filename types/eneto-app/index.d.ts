declare module "@eneto/app" {
    interface AppAction<T, P> {
        type: T;
        payload: P;
    }

    interface AppState {}
}
