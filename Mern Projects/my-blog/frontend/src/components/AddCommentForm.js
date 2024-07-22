import { useState } from "react";
import axios from "axios";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const response = await axios.post(`/api/articles/${articleName}/comment`, {
      postedBy: name,
      text: commentText,
    });
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName("");
    setCommentText("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input onChange={(e) => setName(e.target.value)} type="text"></input>
      </label>
      <lebel>
        Comment:
        <textarea
          onChange={(e) => setCommentText(e.target.value)}
          rows="4"
          cols="50"
        />
      </lebel>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
