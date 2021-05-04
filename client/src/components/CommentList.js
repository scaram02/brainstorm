import React, {useState} from 'react'
import axios from 'axios'



const CommentList = props => {

    console.log('o for once', props.thought._id)

    const deleteComment = commentId => {
        axios.put(`/api/comments/${props.thought._id}`, {commentId: commentId})
        .then(() => {
            props.getTheThought()
            // reload all the thoughts here
        })
    }



    const commentList = (
        <>
        {props.thought.comments && props.thought.comments.map((c) => {
 
            return (
                <div key={c._id}>
                    <h1>{c.comment}</h1>
                    <h4 style={{color: "green"}}>{props.user.username == c.user.username? "You" : c.user.username} made this</h4>
                    {props.user.username === c.user.username? <button onClick={()=> deleteComment(c._id)}>delete me</button> : <div/>}
                </div>
            )
        })}
        </>
    )

    return props.thought? <div>{commentList}</div> : <div>No commments yet</div>
}

export default CommentList