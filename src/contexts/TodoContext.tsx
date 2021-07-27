import React, { createContext, ReactNode, useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";

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
  dispatch: React.Dispatch<any>;
} | null>(null);

const getInitialTodo = (): ITodo[] => {
  let myTodosStr: string | null = sessionStorage.getItem("myTodos");
  if (!myTodosStr) return [];
  return JSON.parse(myTodosStr);
};
export const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [], getInitialTodo);
  useEffect(() => {
    sessionStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
