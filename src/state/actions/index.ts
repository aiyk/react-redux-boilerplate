import { ActionType } from "../action-types";

interface FetchTodosAction {
  type: ActionType.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
  type: ActionType.FETCH_TODOS_SUCCESS;
  payload?: Todo[];
}

interface FetchTodosErrorAction {
  type: ActionType.FETCH_TODOS_ERROR;
  payload?: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type Action =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction;
