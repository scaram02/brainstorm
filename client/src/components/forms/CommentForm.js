import React from 'react'

const CommentForm = props => {

    const handleInputChange = e => {
        const {name, value} = e.target;
        props.setComment({...props.comment, [name]: value})
        props.setAllComments({...props.allComments, ...props.comment})
    }


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
            <textarea 
            type="text" 
            name="comment" 
            value={props.comment.comment} 
            placeholder='comment'
            onChange={handleInputChange}/>
           
            <button>coment</button>
            </form>
        </div>
    )
}

export default CommentForm