import { connect } from "react-redux";
import { LoginStateToProps } from "resume-app";
import { Login } from "../components/login";
import { userActions } from "../modules";

const stateToProps = (): LoginStateToProps => ({
    isLogIn: true,
});
const dispatchToProps = {
    loginSuccess: userActions.loginSuccess,
};

export default connect(stateToProps, dispatchToProps)(Login);
