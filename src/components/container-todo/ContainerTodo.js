import React from 'react';
import { connect } from 'react-redux';

import Todos from '../todos/Todos';
import AddTodo from '../add-todo/AddTodo';

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
        console.log('this.state.todos----------------');
        console.log(this.props);
        console.log(todos);

        return (
            <div id="container-todo">
                <AddTodo/>
                <Todos todos={todos}/>
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