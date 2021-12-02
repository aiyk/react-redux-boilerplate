import { Provider } from "react-redux";
import { store } from "../state";
import TodosList from "./TodosList";

import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const App = () => {
  const { fetchTodos } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.todos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Provider store={store}>
      <div>
        <h1>Todos</h1>
        <TodosList data={data} error={error} loading={loading} />
      </div>
    </Provider>
  );
};

export default App;
