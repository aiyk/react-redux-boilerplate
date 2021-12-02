import { ActionType } from "../action-types";
import { Todo } from "../../models";

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

export type Action =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction;
