import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="w-[50vw] mx-auto p-10 bg-slate-50 flex flex-col items-center">
      <div className="text-3xl mt-4 font-bold text-center text-pink-600">
        Todo List
      </div>
      <div>
        <Form
          setTodos={setTodos}
          editTodo={editTodo}
          todos={todos}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <List todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
};

export default TodoList;
