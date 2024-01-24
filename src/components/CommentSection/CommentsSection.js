import react from "react"
import Comment from "../Comment/Comment.js";
import "./CommentsSection.css" ;
import commentAvatar from "../../Assets/Images/Mohan-muruge.jpg"


const CommentsSection=({ comments }) =>{
    return (
      <section className="comments">
        <div className="comments__block">
          <img src={commentAvatar} alt="User Avatar" className="comment__avatar" />        
            <div className="comments__form">
            <p className="comments__title">JOIN THE CONVERSATION</p>
          <textarea id="commentInput" class="comments__input" placeholder="Add a new comment" required></textarea>
          <button className="comments__button">COMMENT</button>
          </div>

        </div>
        <div className="comments__divider"></div>


        <div className="comments__list">
         {comments.map(comment => (
            <Comment key={comment.id} {...comment} />
         ))} 
        </div>
      </section>
    );
  }

  export default CommentsSection
  