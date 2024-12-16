import React, { useState } from "react";

const TODO = "TODO";
const DOING = "DOING";
const DONE = "DONE";

const DragAndDrop = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dragTask, setDragTask] = useState(null);
  const [updateTask, setUpdateTask] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (updateTask) {
        const obj = {
          title: value,
          status: updateTask.status,
          id: updateTask.id,
        };
        const copyTasks = [...tasks];
        const filtered = copyTasks.filter((item) => item.id === updateTask.id);
        setTasks([...filtered, obj]);
      } else {
        const obj = {
          title: value,
          status: TODO,
          id: Date.now(),
        };
        setTasks((prev) => [...prev, obj]);
      }
      setValue("");
    }
  };

  const handleDrag = (e, task) => {
    setDragTask(task);
  };

  const handleDragAndDrop = (status) => {
    console.log(status);
    let copyTasks = [...tasks];
    copyTasks = copyTasks.map((item) => {
      if (dragTask.id === item.id) {
        item.status = status;
      }
      return item;
    });
    setTasks(copyTasks);
    setDragTask(null);
  };

  const handleDrop = (e) => {
    const status = e.target.getAttribute("data-status");

    if (status === TODO) {
      handleDragAndDrop(TODO);
    } else if (status === DOING) {
      handleDragAndDrop(DOING);
    } else if (status === DONE) {
      handleDragAndDrop(DONE);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDeleteTask = (task) => {
    let copyTasks = [...tasks];
    copyTasks = copyTasks.filter((item) => item.id !== task.id);
    setTasks(copyTasks);
  };

  const handleUpdateTask = (task) => {
    setUpdateTask(task);
    setValue(task.title);
  };

  return (
    <div className="mt-20 w-[70rem] bg-slate-50 p-10 mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-2xl my-2">TASK MANAGER</h1>
        <input
          type="text"
          className="my-2 p-4 border-2 w-96 outline-none"
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="mt-10 flex">
        <div
          className=" w-1/3 "
          data-status={TODO}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="p-4 boder-2 bg-pink-200 text-center">
            <h1>Todo</h1>
          </div>
          {tasks.length > 0 &&
            tasks.map((task) => {
              const { title, id, status } = task;
              return (
                status === TODO && (
                  <div
                    onDrag={(e) => handleDrag(e, task)}
                    draggable
                    className="my-3 border-2 bg-blue-400 p-4 text-white"
                    key={id}
                  >
                    {title}
                    <span
                      className="mx-4 ml-32"
                      onClick={(e) => handleUpdateTask(task)}
                    >
                      🖌️
                    </span>
                    <span
                      className="mx-4"
                      onClick={(e) => handleDeleteTask(task)}
                    >
                      🗑️
                    </span>
                  </div>
                )
              );
            })}
        </div>

        <div
          className="w-1/3"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          data-status={DOING}
        >
          <div className="p-4 boder-2 bg-yellow-200 text-center">
            <h1>Doing</h1>
          </div>
          {tasks.length > 0 &&
            tasks.map((task) => {
              const { title, id, status } = task;
              return (
                status === DOING && (
                  <div
                    onDrag={(e) => handleDrag(e, task)}
                    draggable
                    className="my-3 border-2 bg-blue-400 p-4 text-white"
                    key={id}
                  >
                    {title}

                    <span
                      className="mx-4 ml-32"
                      onClick={(e) => handleUpdateTask(task)}
                    >
                      🖌️
                    </span>
                    <span
                      className="mx-4"
                      onClick={(e) => handleDeleteTask(task)}
                    >
                      🗑️
                    </span>
                  </div>
                )
              );
            })}
        </div>

        <div
          className="w-1/3"
          data-status={DONE}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="p-4 boder-2 bg-green-200 text-center">
            <h1>Done</h1>
          </div>
          {tasks.length > 0 &&
            tasks.map((task) => {
              const { title, id, status } = task;
              return (
                status === DONE && (
                  <div
                    onDrag={(e) => handleDrag(e, task)}
                    draggable
                    className="my-3 border-2 bg-blue-400 p-4 text-white"
                    key={id}
                  >
                    {title}
                    <span
                      className="mx-4 ml-32"
                      onClick={(e) => handleUpdateTask(task)}
                    >
                      🖌️
                    </span>
                    <span
                      className="mx-4"
                      onClick={(e) => handleDeleteTask(task)}
                    >
                      🗑️
                    </span>
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
