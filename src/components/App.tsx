import { Provider } from "react-redux";
import { store } from "../state";
import TodosList from "./TodosList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todos</h1>
        <TodosList />
      </div>
    </Provider>
  );
};

export default App;
