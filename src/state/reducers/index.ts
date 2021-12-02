import { combineReducers } from "redux";
import todoReducers from "./todoReducers";

const reducers = combineReducers({
  todos: todoReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
