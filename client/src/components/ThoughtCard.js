import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import LikeButton from './buttons/LikeButton'
import UnlikeButton from './buttons/UnlikeButton'
import DeleteButton from './buttons/DeleteButton'
import {Card} from 'react-bootstrap'
import '../stylesheets/feed.css'
import edit from '../images/edit.png'
import axios from 'axios'


const ThoughtCard = ({thought, user}) => {


    // userIds who liked this thought
    const [likes, setLikes] = useState([...thought.likes])


    const likesWordS = likes.length === 1? "like" : "likes"
    const commentWordS = thought.comments.length === 1? 'comment' : 'comments'



    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const datePosted = `${months[parseInt(thought.updatedAt.slice(5,7))-1]} ${parseInt(thought.updatedAt.slice(8, 10))}, ${thought.updatedAt.slice(0, 4)}`

    // const deleteThought = () => {

    //     const thoughtId = thought._id
    //     axios
    //     .delete(`api/thought/${thoughtId}`)
    //     .then(() => {
    //         console.log("deleted: ", thoughtId)
    //     })
    //     .catch(err => console.log(err))
    // }
    
    
    return (
        <div className="thought-card-container">
            <div className='thought-card-all'>
            <img src={thought.user.imageUrl} className='profile-pic' alt="Profile picture"/>
            <div className="main-content" >
            <Link to={`/user/${thought.user.username}`} className="profile-link">{thought.user.username} thought of this</Link>
         
            <Link to={`/thought/${thought._id}`} className="thought-link">
           <p>{thought.thought}</p>
            </Link>

            <div  className="button-container">
            {(likes.includes(user._id))? <UnlikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} /> : 
            <LikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} />}
            
          {user.username === thought.user.username && 
           <Link to={`/thought/edit/${thought._id}`}> 
           <img src={edit} alt="" className="action-button"/></Link>
           }
          
           

           <DeleteButton thought={thought} user={user} />
          </div>
          </div> 
          </div>
         <div className="footer">
         <Link to={`/thought/${thought._id}`}>{thought.comments.length} {commentWordS} | {likes.length} {likesWordS}</Link> 
         <p>{datePosted} </p>
        </div>
         
         
      
        </div>
    )
}

export default ThoughtCard