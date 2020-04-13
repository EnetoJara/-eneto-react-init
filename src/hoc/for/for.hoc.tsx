import * as React from "react";

export interface ForProps<T> {
    list: T[];
    callback: (item: T) => React.ReactNode
}
export function For<T>(props: ForProps<T>) {
    return props.list.map(props.callback)
}
