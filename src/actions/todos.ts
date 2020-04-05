import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes, Todo, FetchTodosAction, DeleteTodoAction } from './types';

const url = 'http://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => async (dispatch: Dispatch): Promise<void> => {
  const response = await axios.get<Todo[]>(url);

  dispatch<FetchTodosAction>({
    type: ActionTypes.FETCH_TODO,
    payload: response.data,
  });
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id,
  };
};
