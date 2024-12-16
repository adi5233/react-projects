import React from "react";
import MyAccordian from "./MyAccordian";

const data = [
  {
    question: "alhflhlasfahsfafhad",
    answer: "sfswfrfrfrferfrfr",
  },
  {
    question: "alhflhlasfahsfafhad",
    answer: "sfswfrfrfrferfrfr",
  },
];

const Accordian = () => {
  return (
    <div className="mx-auto w-[50vw]">
      {data.map((d) => (
        <MyAccordian data={d} />
      ))}
    </div>
  );
};

export default Accordian;
