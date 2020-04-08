import * as React from "react";
import { RowProps } from "theme";

export function Row (props: RowProps): React.ReactElement<RowProps> {
    const { children } = props;

    return <div className="app-layout-row">{children}</div>;
}
