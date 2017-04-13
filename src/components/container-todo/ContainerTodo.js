import React, {Component, PropTypes}from 'react';
import { connect } from 'react-redux';

import Todos from '../todos/Todos';
import AddTodo from '../add-todo/AddTodo';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import ReactPlayer from 'react-player'

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.number.isRequired,
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

class ContainerTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        let {dispatch} = this.props;
    }

    render() {
        let {todos} = this.props;

        return (
            <div id="container-todo">
                <AddTodo/>
                <Todos todos={todos}/>
                <RaisedButton label="Default" />
                <DatePicker
                    autoOk={true}
                    floatingLabelText="Submission Start:"
                />
                <SelectableList defaultValue={3}>
                    <Subheader>Selectable Contacts</Subheader>
                    <ListItem
                        value={1}
                        primaryText="Brendan Lim"
                        leftAvatar={<Avatar src="images/ok-128.jpg" />}
                        nestedItems={[
                          <ListItem
                            value={2}
                            primaryText="Grace Ng"
                            leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                          />,
                        ]}
                    />
                    <ListItem
                        value={3}
                        primaryText="Kerem Suer"
                        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                    />
                    <ListItem
                        value={4}
                        primaryText="Eric Hoffman"
                        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                    />
                    <ListItem
                        value={5}
                        primaryText="Raquel Parrado"
                        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                    />
                </SelectableList>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>2</TableRowColumn>
                            <TableRowColumn>Randal White</TableRowColumn>
                            <TableRowColumn>Unemployed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>3</TableRowColumn>
                            <TableRowColumn>Stephanie Sanders</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>4</TableRowColumn>
                            <TableRowColumn>Steve Brown</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>

                <ReactPlayer url='http://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/tes/test_/test__us_1.mp3' playing controls="true" className="react-player"/>
                <ReactPlayer url='https://www.youtube.com/watch?v=Y9XZQO1n_7c' playing controls="true"/>
                <ReactPlayer url='https://vimeo.com/173959909' playing controls="true"/>
            </div>
        );
    }
}


const mapStateToProp = (store) => {
    return {
        todos: store.todo.list
    }
};

export default connect(mapStateToProp)(ContainerTodo);