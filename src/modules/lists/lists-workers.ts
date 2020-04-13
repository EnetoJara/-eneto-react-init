import {put, call} from "redux-saga/effects";
import { getAllListsFailed, getAllListsSuccess } from './lists-actions';
import {listApi} from "./lists-api";
export function* getAllListsWorker () {
    try {
        const lists = yield call(listApi.getLists);
        yield put(getAllListsSuccess(lists.data));
    } catch (error) {
        yield put(getAllListsFailed(error))
    }
}
