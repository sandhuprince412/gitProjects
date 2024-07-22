const CommentsList = ({ comments }) => {
  return (
    <>
      <h1>Comments:</h1>
      {comments.map((comment) => (
        <div className="comment" key={comment.postedBy + ": " + comment.text}>
          <h4>{comment.postedBy}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
