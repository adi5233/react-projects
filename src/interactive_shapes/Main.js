import React, { useState } from "react";
import "./Main.css";

const boxes = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 0],
];

const Main = () => {
  const [select, setSelect] = useState([]);
  const list = boxes.flat(4);

  //   for(let i = 0; i < row; i++) {
  //       for (let j = 0; j < row; j++) {
  //         list.push(
  //             <div>

  //             </div>
  //         )
  //       }
  //   }

  const hanldeClick = (i) => {
    setSelect([...select, i]);
  };

  return (
    <div className="container mx-auto w-[200px] mt-20">
      {list.map((l, i) => {
        return l ? (
          <div
            className="p-4 w-10 m-2 border-2 cursor-pointer"
            style={{ backgroundColor: select.includes(i) ? "pink" : "" }}
            onClick={() => hanldeClick(i)}
          ></div>
        ) : (
          <div className="p-4 w-10 m-2"></div>
        );
      })}
    </div>
  );
};

export default Main;
