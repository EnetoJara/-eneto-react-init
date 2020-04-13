import * as React from "react";
import { RegisterCredentials } from "resume-app";
import { Column } from "../../hoc/column";
import { Row } from "../../hoc/row/row-hoc";
import { Input } from "../theme/input";
import { Button } from "../theme/buttons";
import { RegisterRequest } from "../../modules/users/users-actions";

export interface RegisterProps {
    registerNewUser: RegisterRequest;
}

export class Register extends React.Component<RegisterProps, RegisterCredentials> {
    public constructor (props: RegisterProps) {
        super(props);

        this.state = {
            firstName: "",
            secondName: "",
            lastName: "",
            secondLastName: "",
            email: "",
            password: "",
            password2: "",
        };

        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
        this.onCancelHandler = this.onCancelHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    public onInputChangeHandler (evt: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = evt.currentTarget;

        this.setState({ [`${name}`]: value });
    }

    public onCancelHandler (evt: React.FormEvent<HTMLButtonElement>): void {
        evt.preventDefault();

        this.setState({
            name: "",
            middleName: "",
            lastName: "",
            secondLastName: "",
        });
    }

    public onSubmitHandler (evt: React.FormEvent<HTMLButtonElement>): void {
        evt.preventDefault();

        const { registerNewUser } = this.props;

        registerNewUser(this.state);
    }

    public render (): React.ReactElement<RegisterProps> {
        const {
            firstName, secondName, lastName, secondLastName, email, password, password2,
        } = this.state;
        return (
            <form>
                <Row>
                    <h2 className="page-title">Register</h2>
                </Row>
                <Row>
                    <Column>
                        <Input
                            tabIndex={-1}
                            name="firstName"
                            label="firstName"
                            id="register-input-firstName"
                            onChange={this.onInputChangeHandler}
                            value={firstName}
                            error=""
                        />
                    </Column>
                    <Column>
                        <Input
                            tabIndex={-2}
                            name="secondName"
                            label="Middle Name"
                            id="register-input-secondName"
                            onChange={this.onInputChangeHandler}
                            value={secondName}
                            error=""
                        />
                    </Column>
                    <Column>
                        <Input
                            tabIndex={-3}
                            name="lastName"
                            label="Last Name"
                            id="register-input-lastName"
                            onChange={this.onInputChangeHandler}
                            value={lastName}
                            error=""
                        />
                    </Column>
                    <Column>
                        <Input
                            tabIndex={-4}
                            name="secondLastName"
                            label="Second Last Name"
                            id="register-input-secondLastName"
                            onChange={this.onInputChangeHandler}
                            value={secondLastName}
                            error=""
                        />
                    </Column>

                    <Column>
                        <Input
                            tabIndex={-5}
                            name="email"
                            label="email"
                            id="register-input-email"
                            onChange={this.onInputChangeHandler}
                            value={email}
                            error=""
                        />
                    </Column>
                    <Column>
                        <Input
                            tabIndex={-6}
                            name="password"
                            label="password"
                            id="register-input-password"
                            onChange={this.onInputChangeHandler}
                            value={password}
                            error=""
                        />
                    </Column>
                    <Column>
                        <Input
                            tabIndex={-7}
                            name="password2"
                            label="password2"
                            id="register-input-password2"
                            onChange={this.onInputChangeHandler}
                            value={password2}
                            error=""
                        />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button kind="secondary" solid onClick={this.onCancelHandler}>
                            Cancel
                        </Button>
                        <Button kind="primary" solid onClick={this.onSubmitHandler}>
                            Create
                        </Button>
                    </Column>
                </Row>
            </form>
        );
    }
}
