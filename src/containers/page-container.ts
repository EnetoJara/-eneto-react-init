import { connect } from "react-redux";
import { Page } from "../hoc/page";

const stateToProps = () => ({
    isAuth: true
});
const dispatchToProps = null;

export const PageComponent = connect(stateToProps, dispatchToProps)(Page);
