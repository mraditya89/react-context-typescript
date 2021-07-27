import { useContext } from "react";
import { ITodo, TodoContext } from "../../contexts/TodoContext";

interface Props {
  todo: ITodo;
}
const TodoDetail: React.FC<Props> = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext)!;
  return (
    <div
      className="bg-indigo-800 px-3 py-2 rounded-lg shadow-md cursor-pointer hover:bg-opacity-70 hover:line-through"
      onClick={() => removeTodo(todo.id)}
    >
      <div className="title font-semibold">{todo.title}</div>
      <div className="text-white text-opacity-70">{todo.description}</div>
    </div>
  );
};
export default TodoDetail;
