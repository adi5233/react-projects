import React, { useState } from "react";
import "./main.css";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "c", "=", "+", "-", "/", "*"];

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    const id = e.target.id;
    if (id === "c") {
      setInput("");
    } else if (id === "=") {
      let result = eval(input);
      setInput(result);
    } else {
      setInput(input + id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let result = eval(input);
      setInput(result);
    } catch (e) {
      alert("Invalid input");
      setInput("");
    }
  };

  return (
    <div className="w-[40vw] mx-auto bg-slate-100 mt-20">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            type="text"
            className="border-2 p-4 my-4 w-full outline-none"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
      <div className="calculator" onClick={handleClick}>
        {data.map((d) => (
          <div className="border-2 p-4 bg-pink-400 m-2 w-18" id={d}>
            <button>{d}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
