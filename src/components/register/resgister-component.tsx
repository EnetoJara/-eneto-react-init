import * as React from "react";
import { Row } from "../../hoc/row/row-hoc";
import { Input } from "../theme/input";

export interface RegisterProps {}
export interface RegisterState {
    [x: string]: string;
};

export class Register extends React.Component<RegisterProps, RegisterState> {

    public state: RegisterState;
    public constructor(props: RegisterProps) {
        super(props);

        this.state = {
            name: ""
        }
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    public componentDidMount() {
        console.log("Register mounted");
    }

    public onInputChangeHandler(evt: React.ChangeEvent<HTMLInputElement>): void {
        const {name, value} = evt.currentTarget;

        this.setState({[name]: value});
    }

    public render(): React.ReactElement<RegisterProps> {
        const { name } = this.state
        return (
                <form>

                <Row>
                    <h2 className="page-title">Register</h2>
                </Row>
                    <Row>
                        <Input
                            name="name"
                            label="name"
                            id="register-input-name"
                            onChange={this.onInputChangeHandler}
                            value={name}
                            error=""
                        />
                    </Row>
                </form>
        );
    }
}
