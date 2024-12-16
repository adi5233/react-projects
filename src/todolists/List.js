import React from "react";

const List = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditTodo(todo);
  };

  return (
    <div className="flex items-start flex-col">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="items-start p-4 border-2 my-3 bg-white w-[28rem] flex justify-between"
        >
          <div className="">{todo.text}</div>
          <div className="flex ">
            <div>
              <button
                className="p-2 bg-green-600 mx-2 "
                onClick={() => handleEdit(todo.id)}
              >
                EDIT
              </button>
            </div>
            <div>
              <button
                className="p-2 bg-orange-600 mx-2"
                onClick={() => handleDelete(todo.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
