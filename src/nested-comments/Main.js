import React, { useState } from "react";
import Comment from "./Comment";
import useNode from "./useNode";

const commentsData = {
  id: 1,
  text: "hello",
  replies: [
    {
      id: 2,
      text: "good",
      replies: [
        {
          id: 4,
          text: "best",
          replies: [],
        },
      ],
    },
    {
      id: 3,
      text: "no not possible",
      replies: [],
    },
  ],
};

const Main = () => {
  const [comment, setComment] = useState(commentsData);
  const [insertNode, deleteNode, editNode] = useNode();

  const handleInsertNode = ({ id, text }) => {
    const finalComment = insertNode({ commentId: id, text, comment });
    setComment(finalComment);
  };

  const handleDeleteNode = ({ id }) => {
    const finalComment = deleteNode({ commentId: id, comment });
    setComment(finalComment);
  };

  const handleEditNode = ({ id, text }) => {
    const finalComment = editNode({ commentId: id, text, comment });
    setComment(finalComment);
  };

  return (
    <div className="w-[60vw] mx-auto">
      <div className="bg-red-300 text-center p-4">Comments</div>
      <Comment
        comment={comment}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
      />
    </div>
  );
};

export default Main;
