import { connect } from "react-redux";
import { Login } from "../components/login";

const stateToProps = () => ({
    isLogIn: true
});
const dispatchToProps = null;

export default connect(stateToProps, dispatchToProps)(Login);
