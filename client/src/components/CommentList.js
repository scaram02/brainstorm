import React, {useState} from 'react'
import axios from 'axios'


const CommentList = props => {


    const commentList = (
        <>
        {props.thought.comments && props.thought.comments.map((c, i) => {
            console.log("comments", c)
            return (
                <div key={i}>
                    <h1>{c.comment}</h1>
                </div>
            )
        })}
        </>
    )

    return props.thought? <div>{commentList}</div> : <div>nope</div>
}

export default CommentList