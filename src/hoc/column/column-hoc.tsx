import * as React from "react";
import { ColumnProps } from "../../types/theme/index";

export function Column(props: ColumnProps): React.ReactElement<ColumnProps> {
    const { children } = props;

    return <div className="app-Column">{children}</div>;
}
