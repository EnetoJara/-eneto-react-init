import * as React from "react";

export interface PageProps {
    children: React.ReactNode;
    isAuth: boolean;
}

export class Page extends React.Component<PageProps> {
    public constructor(props: PageProps) {
        super(props);
    }

    public componentDidMount() {
        const { isAuth } = this.props;

        if (!isAuth) {
            window.location.pathname = "/login";
        }
    }

    public render() {
        const { children } = this.props;
        return <div className="app-layout-page">{children}</div>;
    }
}
