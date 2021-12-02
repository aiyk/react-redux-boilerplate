import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_TODOS,
    });

    try {
      const { data } = await axios.get(apiUrl);

      dispatch({
        type: ActionType.FETCH_TODOS_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.FETCH_TODOS_ERROR,
        payload: err.message,
      });
    }
  };
};
