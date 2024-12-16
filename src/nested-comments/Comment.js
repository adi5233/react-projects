import React, { useState, useRef, useEffect } from "react";

const Comment = ({
  comment,
  handleInsertNode,
  handleDeleteNode,
  handleEditNode,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const inputref = useRef(null);

  const handleReply = () => {
    handleInsertNode({ id: comment.id, text: inputValue });
    setInputValue("");
    setShowInput(false);
  };

  const handleDelete = () => {
    handleDeleteNode({ id: comment.id });
  };

  const handleEdit = () => {
    handleEditNode({ id: comment.id, text: inputref.current.innerText });
    setEditMode(false);
  };

  return (
    <div className=" ">
      {comment.id === 1 ? (
        <div className="bg-gray-100 p-4 ">
          <input
            className="p-4 w-[20rem]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="p-4 bg-blue-200" onClick={handleReply}>
            ADD COMMENT
          </button>
        </div>
      ) : (
        <div className="bg-slate-200 my-5 p-8 w-[30rem] text-start">
          <blockquote contenteditable={`${editMode}`}>
            <p ref={inputref}>{comment.text}</p>
          </blockquote>
          <div className="mt-8">
            {editMode ? (
              <>
                <button className="mr-4 p-2 bg-blue-200" onClick={handleEdit}>
                  SAVE
                </button>
                <button
                  className="mr-4 p-2 bg-blue-200"
                  onClick={(e) => setEditMode(false)}
                >
                  CANCEL
                </button>
              </>
            ) : (
              <>
                <button
                  className="mr-4 p-2 bg-blue-200"
                  onClick={() => setShowInput(true)}
                >
                  REPLY
                </button>
                <button
                  className="mr-4 p-2 bg-blue-200"
                  onClick={(e) => {
                    setEditMode(true);
                    inputref.current.focus();
                  }}
                >
                  EDIT
                </button>
                <button
                  className="mr-4 p-2 bg-blue-200"
                  onClick={() => handleDelete()}
                >
                  DELETE
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="ml-10">
        {showInput && (
          <div className=" w-[30rem]">
            <input
              type="text"
              className="p-2 w-52 border-gray-400 border-2"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button className="mr-4 p-2 bg-blue-200" onClick={handleReply}>
              REPLY
            </button>
            <button
              className="mr-4 p-2 bg-blue-200"
              onClick={() => setShowInput(false)}
            >
              CANCEL
            </button>
          </div>
        )}
        {comment.replies.map((comt) => (
          <Comment
            key={comt.id}
            comment={comt}
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleEditNode={handleEditNode}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
