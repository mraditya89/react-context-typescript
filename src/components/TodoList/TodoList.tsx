import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoDetail from "../TodoDetail/TodoDetail";

const TodoList = () => {
  const { todos } = useContext(TodoContext)!;

  if (!todos.length)
    return <div>There is nothing todo today. It's free time.</div>;
  return (
    <div>
      <div className="flex flex-col space-y-3">
        {todos.map((todo) => (
          <TodoDetail todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
