import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";

interface ITodoForm {
  title: string;
  description: string;
}
const TodoForm = () => {
  const [state, setState] = useState<ITodoForm>({
    title: "",
    description: "",
  });

  const { dispatch } = useContext(TodoContext)!;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        title: state.title,
        description: state.description,
      },
    });
    setState({ title: "", description: "" });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className="mt-12" onSubmit={handleSubmit}>
      <div className="">
        <input
          className="w-full px-3 py-2 rounded-lg focus:outline-none text-white text-opacity-80 placeholder-indigo-100 placeholder-opacity-50 bg-indigo-500 focus:bg-indigo-400"
          type="text"
          name="title"
          id="title"
          value={state.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          className="mt-4 w-full px-3 py-2 rounded-lg focus:outline-none text-white text-opacity-80 placeholder-indigo-100 placeholder-opacity-50 bg-indigo-500 focus:bg-indigo-400"
          name="description"
          id="description"
          value={state.description}
          onChange={handleChange}
          rows={4}
          placeholder="Description"
        />
        <div className="mt-6 flex justify-end">
          <button className="bg-indigo-800 bg-opacity-60 hover:bg-opacity-100 px-3 py-2 rounded-lg">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};
export default TodoForm;
