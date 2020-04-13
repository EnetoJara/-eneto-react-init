import * as React from "react";
import { Lists } from 'resume-app';
import {Link} from "react-router-dom";
import "./table.styles.scss";

export interface TableProps {
    headers: any[];
    body: Lists[]
}
export function Table (props: TableProps) {
    const { headers, body } = props;
    const renderHeaderColumn = (item: any) => (<div className="table-header__row-column" key={ item.COLUMN }>
       <h6> { item.COLUMN } </h6>
    </div>)

    const renderBodyColumn = (item: Lists) => (
        <div className="table-body__row" key={ item.id }>
            <div className="table-body__row-column">
                <Link to={`/lists/${item.id}`}>{ item.name }</Link>
            </div>
            <div className="table-body__row-column">
                <span>{ item.description }</span>
            </div>
        </div>)
    return (
        <div className="table">
            <div className="table-header">
                <div className="table-header__row">
                { headers.map(renderHeaderColumn) }
                </div>
            </div>
            <div className="table-body">
                { body.map(renderBodyColumn) }
            </div>
        </div>
    )
}
