import { AppAction } from "resume-app";
import { APP_LOADING, TOGGLE_SIDE_NAV } from "../../utils/constants";

/**
 * Action creator to handle wether or not the sidenav should be display.
 * @param {TOGGLE_SIDE_NAV} show value to be dispatched
 * @returns {AppAction<boolean,TOGGLE_SIDE_NAV>} action
 */
export function toggleSideNav(show: boolean): AppAction<TOGGLE_SIDE_NAV, boolean> {
    return {
        type: TOGGLE_SIDE_NAV,
        payload: show
    };
}

/**
 * Action creator to handle the current state of the app.
 * @param {boolean} loading value to be dispatched
 * @returns {AppAction<APP_LOADING,boolean>} action
 */
export function isLoading(loading: boolean): AppAction<APP_LOADING, boolean> {
    return {
        type: APP_LOADING,
        payload: loading
    };
}
