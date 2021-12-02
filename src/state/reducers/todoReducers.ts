import { ActionType } from "../action-types";
import { Action } from "../actions";
import { TodosState } from "../../models";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: TodosState = initialState,
  action: Action
): TodosState => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_TODOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_TODOS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
