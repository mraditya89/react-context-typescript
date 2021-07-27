import Navbar from "./components/Navbar/Navbar";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { TodoContextProvider } from "./contexts/TodoContext";

const App: React.FC = () => {
  return (
    <div className="bg-indigo-400 min-h-screen px-2 md:px-10 py-2 md:py-12">
      <div className="max-w-4xl mx-auto bg-indigo-600 text-white rounded-xl overflow-hidden shadow-lg">
        <TodoContextProvider>
          <Navbar />
          <div className="px-4 md:px-6 py-6 md:py-8">
            <TodoList />
            <TodoForm />
          </div>
        </TodoContextProvider>
      </div>
    </div>
  );
};

export default App;
