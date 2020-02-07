import * as React from "react";
import { Column } from '../../hoc/column';
import { Row } from "../../hoc/row/row-hoc";
import { Input } from "../theme/input";

export interface RegisterProps { }
export interface RegisterState {
    [x: string]: string;
};

export class Register extends React.Component<RegisterProps, RegisterState> {

    public state: RegisterState;
    public constructor (props: RegisterProps) {
        super(props);

        this.state = {
            name: ""
        }
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    }

    public componentDidMount() {
        console.log("Register mounted");
    }

    public onFocusHandler(evt: React.FocusEvent) {
        evt.preventDefault();

    }

    public onInputChangeHandler(evt: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = evt.currentTarget;

        this.setState({ [name]: value });
    }

    public render(): React.ReactElement<RegisterProps> {
        const { name, lastName, middleName, secondLastName } = this.state
        return (
            <form>

                <Row>
                    <h2 className="page-title">Register</h2>
                </Row>
                <Row>
                        <Column>
                            <Input
                                onFocus={this.onFocusHandler}
                                isFocus
                                tabIndex={1}
                                name="name"
                                label="name"
                                id="register-input-name"
                                onChange={this.onInputChangeHandler}
                                value={name}
                                error=""
                            />
                        </Column>
                        <Column>
                            <Input
                                onFocus={this.onFocusHandler}
                                isFocus
                                tabIndex={2}
                                name="middle-name"
                                label="Middle Name"
                                id="register-input-middle-name"
                                onChange={this.onInputChangeHandler}
                                value={middleName}
                                error=''
                            />
                        </Column>
                        <Column>
                            <Input
                                onFocus={this.onFocusHandler}
                                isFocus
                                tabIndex={3}
                                name="lastName"
                                label="Last Name"
                                id="register-input-lastName"
                                onChange={this.onInputChangeHandler}
                                value={lastName}
                                error=''
                            />
                        </Column>
                        <Column>
                            <Input
                                onFocus={this.onFocusHandler}
                                isFocus
                                tabIndex={4}
                                name="secondLastName"
                                label="Second Last Name"
                                id="register-input-secondLastName"
                                onChange={this.onInputChangeHandler}
                                value={secondLastName}
                                error=''
                            />
                        </Column>
                </Row>
            </form>
        );
    }
}
