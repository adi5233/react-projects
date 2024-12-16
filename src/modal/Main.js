import React, { useState } from "react";
import Modal from "./Modal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <button className="p-4 bg-blue-300" onClick={() => setShowModal(true)}>
          Show details
        </button>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div>
          ho;rverw v erwg rgergerwgreg ergerwgewrgwergewrgerweg
          <h1 className="text-red-800 text-md"> hello adi</h1>
        </div>
      </Modal>
    </>
  );
};

export default Main;
