import * as React from 'react';
import { hot } from "react-hot-loader";
import { Header, Layout, Main, SideNav } from '../../hoc';
import { } from "../../hoc/header/header-hoc";
function MainComponent (): React.ReactElement {

    return (
        <Layout>
            <SideNav>
                <nav>
                    side nav component
                    fdlflk
                </nav>
            </SideNav>
            <Main>
                <Header>
                    <div>son 1</div>
                    <div>son 2</div>
                </Header>
                <main>
                    main shit
                    trol mon
                </main>
                <button type="button">pimp</button>
            </Main>
        </Layout>
    );
}

export const App = process.env.NODE_ENV === "development" ? hot(module)(MainComponent) : MainComponent;
