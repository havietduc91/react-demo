import React from 'react';
import { connect } from 'react-redux';
import { removeToDo } from '../../action-creators/TodoActionCreator';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.removeTodo = this.removeTodo.bind(this);
    }

    componentWillMount() {
        let {dispatch} = this.props;
    }

    removeTodo(index) {
        let {dispatch} = this.props;

        dispatch(removeToDo(index));
    }

    render() {
        let {todos} = this.props;

        return (
            <div>
                <h2> This is todos: </h2>
                <ul>
                    {
                        todos &&
                        todos.map((todo, index) => {
                            return [
                                <div>
                                    <li key={index}> {todo}</li>
                                    <button onClick={() => {
                                         this.removeTodo(index);
                                        }}> Remove </button>
                                </div>
                            ]
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect() (Todos);