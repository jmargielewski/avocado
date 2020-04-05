import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo, DeleteTodoAction } from '../actions';
import { StoreState } from '../reducers';

interface PageProps {
  todos: Todo[];
  fetchTodos(): Promise<void>;
  deleteTodo(id: number): DeleteTodoAction;
}

class Page extends Component<PageProps> {
  state = {};

  onButtonClick = (): void => {
    const { fetchTodos } = this.props; // eslint-disable-line no-shadow
    fetchTodos();
  };

  onTodoClick = (id: number): void => {
    const { deleteTodo } = this.props; // eslint-disable-line no-shadow
    deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    const { todos } = this.props;
    return todos.map((todo: Todo) => {
      return <div>{todo.title}</div>;
    });
  }

  render(): JSX.Element {
    const { todos } = this.props;
    return (
      <div>
        <button type="button" onClick={this.onButtonClick}>
          Fetch
        </button>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            <button type="button" onClick={(): void => this.onTodoClick(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos,
});

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(Page);
