import * as cx from "classnames";
import * as React from "react";
import { ButtonProps } from "theme";

/**
 * Button.
 *
 * @param {ButtonProps} props - button's props
 * @returns {React.ReactElement<ButtonProps>} Button.
 */
export function Button (props: ButtonProps): React.ReactElement<ButtonProps> {
    const {
        children, solid = false, kind = "default", ...rest
    } = props;
    return (
        <button
            className={cx({
                button: true,
                [kind]: true,
                solid,
            })}
            type="button"
            {...rest}
        >
            {children}
        </button>
    );
}
