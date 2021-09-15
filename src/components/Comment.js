import React from "react";
import CommentIcon from "./images/Comment.png"
import "./Comment.css"

const Comment = () => {
    return <div>
        <button><img src={CommentIcon} className="comment" /></button>
    </div>

}
export default Comment;