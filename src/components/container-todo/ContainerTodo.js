import React from 'react';
import { connect } from 'react-redux';

import Todos from '../todos/Todos';
import AddTodo from '../add-todo/AddTodo';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

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