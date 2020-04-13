import { connect } from "react-redux";
import { List } from "../components/list";
import { getAllListsRequest } from '../modules/lists/lists-actions';
import { AppState } from 'resume-app';
import { lists } from '../modules/lists';

const stateToProps = (state: AppState) => {
    return {
        lists: lists(state)
    }
};
const dispatchToProps = {
    getAllLists: getAllListsRequest
};

export default connect(stateToProps, dispatchToProps)(List);
