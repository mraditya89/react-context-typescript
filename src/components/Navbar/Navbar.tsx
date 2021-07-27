import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const Navbar: React.FC = () => {
  const { todos } = useContext(TodoContext)!;

  return (
    <div className="px-4 py-3 text-center bg-indigo-500">
      <div className="text-3xl font-semibold">Todo List App</div>
      <p className="mt-1 text-white text-opacity-70">
        Currently you have {todos.length} todos to get through ...
      </p>
    </div>
  );
};
export default Navbar;
