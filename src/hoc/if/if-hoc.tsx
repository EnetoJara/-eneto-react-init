import * as React from "react";
import { IfProps } from "theme";

export function If(props: IfProps): React.ReactElement<IfProps> | null {
    const { condition, children } = props;
    return condition ? <React.Fragment>{children}</React.Fragment> : null;
}
