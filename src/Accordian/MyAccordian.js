import React, { useState } from "react";

const MyAccordian = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="my-4 p-4">
      <div className=" p-4 border-2" onClick={handleToggle}>
        {data.question}
      </div>
      {isOpen && <div className="bg-slate-100 p-4">{data.answer}</div>}
    </div>
  );
};

export default MyAccordian;
