import { createContext, ReactNode, useEffect, useState } from "react";
import { v1 as uuid } from "uuid";

export interface ITodo {
  id: string;
  title: string;
  description: string;
}

interface Props {
  children: ReactNode;
}

export const TodoContext = createContext<{
  todos: ITodo[];
  addTodo: (title: string, description: string) => void;
  removeTodo: (id: string) => void;
} | null>(null);

const getInitialTodo = (): ITodo[] => {
  let myTodosStr: string | null = sessionStorage.getItem("myTodos");
  if (!myTodosStr) return [];
  return JSON.parse(myTodosStr);
};
export const TodoContextProvider = (props: Props) => {
  const [todos, setTodos] = useState<ITodo[]>(getInitialTodo());
  const addTodo = (title: string, description: string): void => {
    setTodos([...todos, { id: uuid(), title, description }]);
  };

  const removeTodo = (id: string): void => {
    const filteredTodo: ITodo[] = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  useEffect(() => {
    sessionStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
