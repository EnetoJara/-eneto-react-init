import * as React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "../../containers";
import { Header, Layout, Main, SideNav } from "../../hoc";
import { ROUTE_LOGIN } from "../../utils/constants";
import { Button } from "../theme/buttons/";

function MainComponent(): React.ReactElement {
    return (
        <Layout>
            <BrowserRouter>
                <SideNav>
                    <nav>SideNav</nav>
                </SideNav>
                <Main>
                    <Header>
                        <div>Header</div>
                        <div>son 2</div>
                    </Header>
                    <main>
                        <Button />
                        <Switch>
                            <Route exact path={ROUTE_LOGIN} component={Login} />
                        </Switch>
                    </main>
                </Main>
            </BrowserRouter>
        </Layout>
    );
}

export const App = process.env.NODE_ENV === "development" ? hot(module)(MainComponent) : MainComponent;
