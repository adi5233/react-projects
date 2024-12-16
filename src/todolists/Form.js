import React, { useState, useEffect } from "react";

const Form = ({ todos, setTodos, editTodo, setEditTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!editTodo) {
      const todo = { id: new Date().getTime(), text: input };
      setTodos((prev) => [...prev, todo]);
    } else {
      const newTodos = todos.map((todo) => {
        if (todo.id === editTodo.id) {
          return { ...todo, text: input };
        }
        return todo;
      });
      setTodos(newTodos);
      setEditTodo(null);
    }
    setInput("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    } else {
      setInput("");
    }
  }, [editTodo]);

  return (
    <div className="my-10">
      <input
        type="text"
        value={input}
        className="border-2 p-4 w-96 outline-none"
        placeholder="Type here..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="border-2 p-4 bg-pink-400 text-white"
      >
        Add
      </button>
    </div>
  );
};

export default Form;
