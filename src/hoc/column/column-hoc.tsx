import * as React from "react";
import { ColumnProps } from "theme";

export function Column (props: ColumnProps): React.ReactElement<ColumnProps> {
    const { children } = props;

    return <div className="app-layout-column">{children}</div>;
}
