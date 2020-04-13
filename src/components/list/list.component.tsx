import * as React from "react";
import { Lists } from 'resume-app';
import { Section } from '../../hoc';
import { Row } from '../../hoc/row';
import { GetAllListsRequest } from '../../modules/lists/lists-actions';
import { Column } from '../../hoc/column';
import { Button } from '../theme/buttons';
import { Table } from '../table';
import i18n from "../../utils/i18n";

import "./list.styles.scss";
export interface ListsProps {
    lists: Lists[],
    getAllLists: GetAllListsRequest
}

export class List extends React.Component<ListsProps, {}> {
    constructor (props: ListsProps) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    public componentDidMount () {
        const { getAllLists } = this.props;

        return getAllLists()
    }

    public renderItem (item: Lists) {
        return (
            <Row key={ item.id }>
                <Column>
                    <span>{ item.name }</span>
                </Column>
                <Column>
                    <span>{ item.description }</span>
                </Column>
            </Row>
        )
    }

    public render (): React.ReactElement<ListsProps> {
        const { lists } = this.props;
        const { TABLE } = i18n(navigator.language);
        return (
            <div className="list-layout">
                <Section section="list-layout__title">
                    <h2 className="page-title">{TABLE.TITLE}</h2>
                </Section>
                <Section section="list-layout__table">
                    <Table headers={ TABLE.HEADERS } body={ lists } />
                </Section>
                <Section section="list-layout_btns">
                    <Button kind="primary" solid>
                        Add List
                </Button>
                </Section>
            </div>
        )
    }
}
export function ListComponent (props: ListsProps) {
    const { lists } = props;
    const renderRow = (item: Lists): React.ReactElement => (
        <Row key={ item.id }>
            <h1> { item.name }</h1>
            <p>{ item.description }</p>
        </Row>
    )
    return (
        <Section section="lists">
            { lists.map(renderRow) }
        </Section>
    )
}
