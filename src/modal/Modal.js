import React from "react";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  const handleClose = (id) => {
    if (id === "wrapper") {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-25 flex justify-center items-center"
      id="wrapper"
      onClick={(e) => handleClose(e.target.id)}
    >
      <div className=" w-[600px] flex flex-col">
        <div className="text-end">
          <button onClick={() => onClose()}>X</button>
        </div>
        <div className="bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
