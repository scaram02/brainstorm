import React from 'react'
import '../../stylesheets/comments.css'

const CommentForm = props => {

    const handleInputChange = e => {
        const {name, value} = e.target;
        props.setComment({...props.comment, [name]: value})
        props.setAllComments({...props.allComments, ...props.comment})
    }



    return (
        <div>
            <form className="add-comment" onSubmit={props.handleSubmit}>
            <input
            type="text" 
            name="comment" 
            value={props.comment.comment} 
            placeholder='Comment'
            onChange={handleInputChange}/>
           
            <button>Add comment!</button>
            </form>
        </div>
    )
}

export default CommentForm