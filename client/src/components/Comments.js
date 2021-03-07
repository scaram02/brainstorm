import React, {useState} from 'react'
import AddComment from './forms/AddComment'

const Comments = props => {

    const [allComments, setAllComments] = useState([])


    return (
        <div>
            <h1>COMMENTS.JS</h1>
            <AddComment getTheThought={props.getTheThought} user={props.user} allComments={allComments} setAllComments={setAllComments}/>
        </div>
    )
}

export default Comments