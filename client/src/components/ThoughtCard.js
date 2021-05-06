import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import LikeButton from './buttons/LikeButton'
import UnlikeButton from './buttons/UnlikeButton'
import DeleteButton from './buttons/DeleteButton'
import {Card} from 'react-bootstrap'
import '../stylesheets/feed.css'
import like from '../images/brainlike.png'

const ThoughtCard = ({thought, user}) => {


    // userIds who liked this thought
    const [likes, setLikes] = useState([...thought.likes])


    const likesWordS = likes.length === 1? "like" : "likes"
    const commentWordS = thought.comments.length === 1? 'comment' : 'comments'



    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const datePosted = `${months[parseInt(thought.updatedAt.slice(5,7))-1]} ${parseInt(thought.updatedAt.slice(8, 10))}, ${thought.updatedAt.slice(0, 4)}`
    
    return (
        <div className="thought-card-container">

            <img src={thought.user.imageUrl} className='profile-pic' alt="Profile picture"/>
            <img src={like} alt="like"/>
            <Link to={`/user/${thought.user.username}`} className="profile-link">{thought.user.username} thought of this</Link>
         
            <Link to={`/thought/${thought._id}`} className="thought-link">
           <h1>{thought.thought}</h1>
            </Link>


            {(likes.includes(user._id))? <UnlikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} /> : 
            <LikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} />}
            
          {user.username === thought.user.username && 
           <Link to={`/thought/edit/${thought._id}`}>Having second thoughts?</Link>}

           <DeleteButton thought={thought} user={user}/>
         <div className="footer">
         <Link to={`/thought/${thought._id}`}>{thought.comments.length} {commentWordS} | {likes.length} {likesWordS}</Link> 
         <p>{datePosted} </p>

         </div>
           
      
        </div>
    )
}

export default ThoughtCard