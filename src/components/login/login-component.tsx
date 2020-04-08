import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { LoginCredential } from "resume-app";
import { LoginRequest } from "../../modules/users/users-actions";
import { Row } from "../../hoc/row";
import { Column } from "../../hoc/column";
import { Input } from "../theme/input";
import { Button } from "../theme/buttons";

export interface LoginProps extends RouteComponentProps {
    isLogIn: boolean;
    submitLogin: LoginRequest;
}

export class Login extends React.Component<LoginProps, LoginCredential> {
    public constructor (props: LoginProps) {
        super(props);

        this.state ={
            email: "",
            password: "",
        };

        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
        this.onCancelHandler = this.onCancelHandler.bind(this);
        this.onSubmitLoginHandler = this.onSubmitLoginHandler.bind(this);
    }

    public onInputChangeHandler (evt: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = evt.currentTarget;

        this.setState({ [`${name}`]: value });
    }

    public onCancelHandler (evt: React.FormEvent<HTMLButtonElement>): void {
        evt.preventDefault();

        this.setState({
            email: "",
            password: "",
        });
    }

    public onSubmitLoginHandler (evt: React.FormEvent<HTMLButtonElement>): void {
        evt.preventDefault();
        const { submitLogin } = this.props;

        submitLogin(this.state);
    }

    public render (): React.ReactElement<LoginProps> {
        const { email, password } = this.state;
        return (
            <form>
                <Row>
                    <h2 className="page-title">Register</h2>
                </Row>
                <Row>
                    <Column>
                        <Input
                            tabIndex={-1}
                            name="email"
                            label="email"
                            id="login-input-email"
                            onChange={this.onInputChangeHandler}
                            value={email}
                            error=""
                        />
                    </Column>
                    <Column>
                        <Input
                            tabIndex={-2}
                            name="password"
                            label="Password"
                            id="register-input-password"
                            onChange={this.onInputChangeHandler}
                            value={password}
                            error=""
                        />
                    </Column>
                </Row>
                <Row>
                    <Button kind="secondary" solid onClick={this.onCancelHandler}>
                        Cancel
                    </Button>
                    <Button kind="primary" solid onClick={this.onSubmitLoginHandler}>
                        Login
                    </Button>
                </Row>
            </form>
        );
    }
}
