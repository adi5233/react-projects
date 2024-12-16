export default function useNode() {
  const insertNode = ({ commentId, text, comment }) => {
    if (comment.id === commentId) {
      comment.replies.push({
        id: new Date().getTime(),
        text,
        replies: [],
      });

      return comment;
    }

    comment.replies = comment.replies.map((childCommnet) =>
      insertNode({ commentId, text, comment: childCommnet })
    );

    return comment;
  };

  const deleteNode = ({ commentId, comment }) => {
    for (let i = 0; i < comment.replies?.length; i++) {
      let currentComment = comment.replies[i];
      if (currentComment.id === commentId) {
        comment.replies.splice(i, 1);
        return comment;
      } else {
        deleteNode({ commentId, comment: currentComment });
      }
    }
    return { ...comment };
  };

  const editNode = ({ commentId, text, comment }) => {
    if (comment.id === commentId) {
      comment.text = text;
      return comment;
    }

    comment.replies = comment.replies.map((childCommnet) =>
      editNode({ commentId, text, comment: childCommnet })
    );

    return comment;
  };

  return [insertNode, deleteNode, editNode];
}
