import { fork, takeLatest } from "redux-saga/effects";
import { GET_LISTS_REQUEST } from '../../utils/constants';
import { getAllListsWorker } from './lists-workers';

function* getAllListWatcher () {
    yield takeLatest(GET_LISTS_REQUEST, getAllListsWorker);
}

export const listsWatchers = fork(getAllListWatcher);
