import React, {Component} from 'react';
import {Icon, Table, Message, Segment, Button} from 'semantic-ui-react';

const winningCombs = [
    [
        0, 1, 2
    ],
    [
        3, 4, 5
    ],
    [
        6, 7, 8
    ],
    [
        1, 5, 9
    ],
    [3, 5, 7]
];
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            win: false,
            scoreX: 0,
            scoreO: 0,
            table: []
        }
    }

    handleClick = (id) => {
        let {table, win} = this.state;

        if (!win) {
            this.setState({
                table: [
                    ...table,
                    id
                ]
            }, () => {
                let score = this.checkWin();
                const {scoreX, scoreO} = this.state;

                this.setState({
                    scoreX: score.winX + scoreX,
                    scoreO: score.winO + scoreO
                });
            });
        }
    }

    checkWin = () => {
        let xArr = [];
        let oArr = [];
        const {table} = this.state;

        console.log(this.state);
        table.map(t => table.indexOf(t) % 2 === 0
            ? xArr.push(t)
            : oArr.push(t));
        let winX = winningCombs.find(c => xArr.includes(c[0]) && xArr.includes(c[1]) && xArr.includes(c[2]));
        let winO = winningCombs.find(c => oArr.includes(c[0]) && oArr.includes(c[1]) && oArr.includes(c[2]));

        this.setState({
            win: winX !== undefined || winO !== undefined
        });

        return {
            winX: winX !== undefined
                ? 1
                : 0,
            winO: winO !== undefined
                ? 1
                : 0
        };
    }

    handleReset = () => {
        this.setState({table: [], win: false});
    }

    render() {
        const {table, scoreX, scoreO, win} = this.state;

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
                            {scoreX}
                        </Segment>
                        <Segment textAlign="center">
                            <Button secondary onClick={this.handleReset}>Clear</Button>
                        </Segment>
                        <Segment textAlign="center">
                            {scoreO}
                        </Segment>
                    </Segment.Group>
                    {win && <Segment textAlign="center" inverted>
                        Game finished! Please clear the table
                    </Segment>}
                </div>
            </div>
        );
    }
}