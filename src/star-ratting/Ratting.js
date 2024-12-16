import React, { useState } from "react";

const Ratting = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="mx-auto mt-20 w-[20rem] p-10 ">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <div
              key={num}
              onClick={() => setRating(num)}
              onMouseOver={() => setHover(num)}
              onMouseLeave={() => setHover(rating)}
            >
              <button
                className={`p-2 border-2 mx-2 cursor-pointer ${
                  hover >= num || num <= rating ? "bg-red-300" : ""
                }`}
              >
                {num}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ratting;
