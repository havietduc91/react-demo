import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../../action-creators/TodoActionCreator';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.addTodo = this.addTodo.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
    }

    componentWillMount() {
        let {dispatch} = this.props;
    }

    addTodo() {
        let {dispatch} = this.props;

        if (this.state.todoString) {
            dispatch(addToDo(this.state.todoString));
        }
    }

    changeTodo(event) {
        this.setState({todoString: event.target.value});
    }

    render() {
        return (
            <div>
                <h2>Add Todo:</h2>
                Input: <input type="text" onChange={this.changeTodo}/>
                <br/> <br/>
                Button: <button onClick={() => {
                             this.addTodo();
                         }}>
                        Add Todo</button>
            </div>
        );
    }
}

export default connect()(AddTodo);