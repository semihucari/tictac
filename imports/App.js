import React, {Component} from 'react';
import {Icon, Table} from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';

export default class App extends Component {

    handleClick = () => {
        debugger;
    }

    render() {
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
                                    onClick={this.handleClick}>
                                    <Icon name="close" size="massive"/>
                                </Table.Cell>
                                <Table.Cell active textAlign="center" verticalAlign="middle">
                                    <Icon name="circle outline" size="massive"/>
                                </Table.Cell>
                                <Table.Cell textAlign="center" verticalAlign="middle">
                                    <Icon name="close" size="massive"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell active textAlign="center" verticalAlign="middle">
                                    <Icon name="circle outline" size="massive"/>
                                </Table.Cell>
                                <Table.Cell textAlign="center" verticalAlign="middle">
                                    <Icon name="close" size="massive"/>
                                </Table.Cell>
                                <Table.Cell active textAlign="center" verticalAlign="middle">
                                    <Icon name="close" size="massive"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign="center" verticalAlign="middle">
                                    <Icon name="circle outline" size="massive"/>
                                </Table.Cell>
                                <Table.Cell active textAlign="center" verticalAlign="middle">
                                    <Icon name="close" size="massive"/>
                                </Table.Cell>
                                <Table.Cell textAlign="center" verticalAlign="middle">
                                    <Icon name="close" size="massive"/>
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
                            <Button secondary>Clear</Button>
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