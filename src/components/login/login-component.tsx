import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { LoginSuccess } from "../../modules/users/users-actions";

export interface LoginProps extends RouteComponentProps {
    isLogIn: boolean;
    loginSuccess: LoginSuccess;
}
export interface LoginState {
    email: string;
    password: string;
}

export class Login extends React.Component<LoginProps, LoginState> {
    public state: LoginState;

    public constructor (props: LoginProps) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    public componentDidMount (): void {
        const { loginSuccess } = this.props;

        loginSuccess({
            id: -1,
            firstName: "tro",
            secondName: "tro",
            lastName: "er",
            secondLastName: "",
            email: "",
            token: ""
        });
    }

    public render (): React.ReactElement<LoginProps> {
        const { email, password } = this.state;
        return (
            <div>
                component
                {email}
                {password}
            </div>
        );
    }
}
