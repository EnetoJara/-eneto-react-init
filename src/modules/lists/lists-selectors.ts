import {createSelector} from "reselect";
import { AppState } from 'resume-app';

const getLists = (state:AppState) => state.lists.lists;

export const lists = createSelector(getLists, lists => lists);
