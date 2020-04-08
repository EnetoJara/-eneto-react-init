import { connect } from "react-redux";
import { PageStateToProps } from "resume-app";
import { Page } from "../hoc/page";

const stateToProps = (): PageStateToProps => ({
    isAuth: true,
});
const dispatchToProps = null;

export const PageComponent = connect(stateToProps, dispatchToProps)(Page);
