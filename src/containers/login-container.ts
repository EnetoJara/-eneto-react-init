import { connect } from "react-redux";
import { Login } from "../components/login";
import { userActions } from "../modules";

const stateToProps = () => ({
    isLogIn: true
});
const dispatchToProps = {
    loginSuccess: userActions.loginSuccess
};

export default connect(stateToProps, dispatchToProps)(Login);
