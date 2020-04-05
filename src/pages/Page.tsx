import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface PageProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface PageState {
  loading: boolean;
}
class Page extends Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);

    this.state = { loading: false };
  }

  componentDidUpdate(prevProps: PageProps): void {
    this.setLoading(prevProps);
  }

  setLoading = (prevProps: PageProps): void => {
    const { todos } = this.props;

    if (!prevProps.todos.length && todos.length) {
      this.setState({ loading: false });
    }
  };

  onButtonClick = (): void => {
    const { fetchTodos } = this.props; // eslint-disable-line no-shadow
    fetchTodos();
    this.setState({ loading: true });
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
    const { loading } = this.state;
    return (
      <div>
        <button type="button" onClick={this.onButtonClick}>
          Fetch
        </button>
        {loading ? 'Loading...' : null}
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
