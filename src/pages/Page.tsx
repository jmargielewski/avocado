import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import Grid from '../components/Grid';
import Paragraph from '../components/Elements/Paragraph/index';

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
        <Grid>
          <Grid.Row>
            <Grid.Column size={4} floatedLeft>
              1
            </Grid.Column>
            <Grid.Column size={4} floatedRight>
              <Paragraph light>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis recusandae pariatur
                minima voluptate. Laboriosam temporibus quod repellat, incidunt vitae voluptas animi
                aperiam autem minus cupiditate velit placeat earum iste perspiciatis?
              </Paragraph>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column size={2}>2</Grid.Column>
          <Grid.Column size={4}>4</Grid.Column>
          <Grid.Column size={1}>1</Grid.Column>
          <Grid.Column size={1}>1</Grid.Column>
          <Grid.Column size={3}>3</Grid.Column>
          <Grid.Column size={1}>1</Grid.Column>
        </Grid>
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
