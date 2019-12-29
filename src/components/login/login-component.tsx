import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export interface LoginProps extends RouteComponentProps {
    isLogIn: boolean;
}
export interface LoginState {
    email: string;
    password: string;
}

export class Login extends React.Component<LoginProps, LoginState> {
    public constructor (props: LoginProps) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    public componentDidMount (): void {
        const { isLogIn } = this.props;

        if (isLogIn) {
            this.props.history.push("/home");
        }
    }

    public render (): React.ReactElement<LoginProps> {
        const { email, password } = this.state;
        return (
            <div>
                {" "}
                component
                {email}
                {password}
            </div>
        );
    }
}
