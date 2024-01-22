import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "dthcs",
        comment: "hello, i love react",
    },
    {
        name: "dthcs2",
        comment: "hello, i love java",
    },
    {
        name: "dthcs3",
        comment: "hello, i love python",
    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name = {comment.name} comment = {comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;