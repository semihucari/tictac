import React, {Component} from 'react';
import {Icon, Label, Menu, Table} from 'semantic-ui-react'

export default class App extends Component {

    render() {
        return (
            <div>
                <Table celled>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell></Table.Cell>
                            <Table.Cell active textAlign="center">
                                <Icon name="close" size="massive"/>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell active></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell active></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell></Table.Cell>
                            <Table.Cell active></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}