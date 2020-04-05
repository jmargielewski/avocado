export interface Todo {
  id: number;
  title: number;
  completed: number;
}

export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODO;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

export type Action = FetchTodosAction | DeleteTodoAction;

export enum ActionTypes {
  FETCH_TODO,
  DELETE_TODO,
}
