import "./comment.css";

function Comment({ name, timestamp, comment }) {
  const formattedDate = new Date(timestamp).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
    <div className="default-comments__block">
      <div className="default-comments__avatar"></div>
      <div className="default-comments__details">
        <div className="default-comments__name-and-date">
          <p className="default-comments__name">{name}</p>
          <span className="default-comments__date">{formattedDate}</span>
        </div>
        <p className="default-comments__text">{comment}</p>

      </div>

    </div>
          <div className="default-comments__divider"> </div>

   
          </>
  );
}

export default Comment;