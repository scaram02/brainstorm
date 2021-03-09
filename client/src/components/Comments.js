import React, {useState} from 'react'
import AddComment from './forms/AddComment'
import CommentList from './CommentList'

const Comments = props => {

    const [allComments, setAllComments] = useState([])


    return (
        <div>
            <h1>COMMENTS.JS</h1>
            <AddComment 
            // getTheThought={props.getTheThought} 
            user={props.user} 
            allComments={allComments} 
            setAllComments={setAllComments} 
            thought={props.thought}/>
            <CommentList 
            getTheThought={props.getTheThought}
            allComments={allComments} 
            setAllComments={setAllComments} 
            thought={props.thought} 
            allThoughts={props.allThoughts} 
            setAllThoughts={props.setAllThoughts}
            user={props.user}
            // getTheThought={props.getTheThought}
            />
        </div>
    )
}

export default Comments