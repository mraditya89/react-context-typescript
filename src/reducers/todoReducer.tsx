import { v1 as uuid } from "uuid";
import { ITodo } from "../contexts/TodoContext";

export type TTodoAction =
  | { type: "ADD_TODO"; payload: { title: string; description: string } }
  | { type: "REMOVE_TODO"; payload: { id: string } };

export const todoReducer = (state: ITodo[], action: TTodoAction): ITodo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: uuid(),
          title: action.payload.title,
          description: action.payload.description,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return [...state];
  }
};
