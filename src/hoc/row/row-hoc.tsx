import * as React from "react";
import { RowProps } from "../../types/theme/index";

export function Row(props: RowProps): React.ReactElement<RowProps> {
    const { children } = props;

    return <div className="app-row">{children}</div>;
}
