import * as cx from "classnames";
import * as React from "react";
import { InputProps } from "theme";
import { If } from "../../../hoc/if";

export function Input (props: InputProps): React.ReactElement<InputProps> {
    const {
        error = "error", id, label, ...rest
    } = props;

    const hasError = error.trim().length > 0;
    return (
        <div
            className={cx({
                "form-control": true,
                "has-error": hasError,
            })}
        >
            <label htmlFor={id}>
                {label}
                <input id={id} {...rest} />
            </label>
            <If condition={hasError}>
                <small className="er">{error}</small>
            </If>
        </div>
    );
}
