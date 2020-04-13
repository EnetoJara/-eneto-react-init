import * as React from "react";

export interface SectionProps {
    section: string;
    children: React.ReactNode;
}

export function Section (props: SectionProps): React.ReactElement<SectionProps> {
    const styles=`app-layout__${props.section}`;
    return (
        <div className={styles}>
            {props.children}
        </div>
    )
}
