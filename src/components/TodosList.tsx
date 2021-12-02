import { TodosState } from "../models";

const TodosList: React.FC<TodosState> = ({ data, error, loading }) => {
  return (
    <div>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error &&
        !loading &&
        data?.map((todo) => <div key={todo.id}>{todo.title}</div>)}
    </div>
  );
};

export default TodosList;
