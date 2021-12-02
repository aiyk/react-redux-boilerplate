import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const TodosList: React.FC = () => {
  const { fetchTodos } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.todos);

  useEffect(() => {
    fetchTodos();
  }, []);

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
