import React, {Component} from 'react';
import {Icon, Table} from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 0,
            table: []
        }
    }

    handleClick = (id) => {
        let {turn, table} = this.state;

        this.setState({
            turn: turn++,
            table: [
                ...table,
                id
            ]
        }, () => console.log(this.state))
    }

    handleReset = () => {}

    render() {
        const {table} = this.state;

        return (
            <div className="container-div">
                <div
                    style={{
                    width: '40vw',
                    margin: 'auto',
                    paddingTop: '2vh'
                }}>
                    <Table celled>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell
                                    textAlign="center"
                                    verticalAlign="middle"
                                    onClick={() => this.handleClick(1)}>
                                    {table.includes(1)
                                        ? <Icon
                                                name={table.indexOf(1) % 2 == 0
                                                ? "close"
                                                : "circle outline"}
                                                size="massive"/>
                                        : <Icon
                                            style={{
                                            opacity: '0'
                                        }}
                                            name="close"
                                            size="massive"/>}
                                </Table.Cell>
                                <Table.Cell
                                    active
                                    textAlign="center"
                                    verticalAlign="middle"
                                    onClick={() => this.handleClick(2)}>
                                    {table.includes(2)
                                        ? <Icon
                                                name={table.indexOf(2) % 2 == 0
                                                ? "close"
                                                : "circle outline"}
                                                size="massive"/>
                                        : <Icon
                                            style={{
                                            opacity: '0'
                                        }}
                                            name="close"
                                            size="massive"/>}
                                </Table.Cell>
                                <Table.Cell
                                    textAlign="center"
                                    verticalAlign="middle"
                                    onClick={() => this.handleClick(3)}>
                                    {table.includes(3)
                                        ? <Icon
                                                name={table.indexOf(3) % 2 == 0
                                                ? "close"
                                                : "circle outline"}
                                                size="massive"/>
                                        : <Icon
                                            style={{
                                            opacity: '0'
                                        }}
                                            name="close"
                                            size="massive"/>}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell
                                    active
                                    textAlign="center"
                                    verticalAlign="middle"
                                    onClick={() => this.handleClick(4)}>
                                    {table.includes(4)
                                        ? <Icon
                                                name={table.indexOf(4) % 2 == 0
                                                ? "close"
                                                : "circle outline"}
                                                size="massive"/>
                                        : <Icon
                                            style={{
                                            opacity: '0'
                                        }}
                                            name="close"
                                            size="massive"/>}
                                </Table.Cell>
                                <Table.Cell
                                    textAlign="center"
                                    verticalAlign="middle"
                                    onClick={() => this.handleClick(5)}>
                                    {table.includes(5)
                                        ? <Icon
                                                name={table.indexOf(5) % 2 == 0
                                                ? "close"
                                                : "circle outline"}
                                                size="massive"/>
                                        : <Icon
                                            style={{
                                            opacity: '0'
                                        }}
                                            name="close"
                                            size="massive"/>}
                                </Table.Cell>
                                <Table.Cell
                                    active
                                    textAlign="center"
                                    verticalAlign="middle"
                                    onClick={() => this.handleClick(6)}>
                                    {table.includes(6)
                                        ? <Icon
                                                name={table.indexOf(6) % 2 == 0
                                                ? "close"
                                                : "circle outline"}
                                                size="massive"/>
                                        : <Icon
                                            style={{
                                            opacity: '0'
                                        }}
                                            name="close"
                                            size="massive"/>}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell
                                    textAlign="center"
                                    verticalAlign="middle"
                                    onClick={() => this.handleClick(7)}>
                                    {table.includes(7)
                                        ? <Icon
                                                name={table.indexOf(7) % 2 == 0
                                                ? "close"
                                                : "circle outline"}
                                                size="massive"/>
                                        : <Icon
                                            style={{
                                            opacity: '0'
                                        }}
                                            name="close"
                                            size="massive"/>}
                                </Table.Cell>
                                <Table.Cell
                                    active
                                    textAlign="center"
                                    verticalAlign="middle"
                                    onClick={() => this.handleClick(8)}>
                                    {table.includes(8)
                                        ? <Icon
                                                name={table.indexOf(8) % 2 == 0
                                                ? "close"
                                                : "circle outline"}
                                                size="massive"/>
                                        : <Icon
                                            style={{
                                            opacity: '0'
                                        }}
                                            name="close"
                                            size="massive"/>}
                                </Table.Cell>
                                <Table.Cell
                                    textAlign="center"
                                    verticalAlign="middle"
                                    onClick={() => this.handleClick(9)}>
                                    {table.includes(9)
                                        ? <Icon
                                                name={table.indexOf(9) % 2 == 0
                                                ? "close"
                                                : "circle outline"}
                                                size="massive"/>
                                        : <Icon
                                            style={{
                                            opacity: '0'
                                        }}
                                            name="close"
                                            size="massive"/>}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                <div
                    style={{
                    width: '80vh',
                    margin: 'auto'
                }}>
                    <Segment.Group horizontal>
                        <Segment textAlign="center">
                            0
                        </Segment>
                        <Segment textAlign="center">
                            <Button secondary onClick={this.handleReset}>Clear</Button>
                        </Segment>
                        <Segment textAlign="center">
                            0
                        </Segment>
                    </Segment.Group>
                </div>
            </div>
        );
    }
}