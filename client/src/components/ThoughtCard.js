import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import LikeButton from './buttons/LikeButton'
import UnlikeButton from './buttons/UnlikeButton'
import DeleteButton from './buttons/DeleteButton'

const ThoughtCard = ({thought, user}) => {

const photos = ['../profile-icons/brain.png', '../profile-icons/book.png', '../profile-icons/lightbulb.png', '../profile-icons/lightning.png', '../profile-icons/thought.png', '../profile-icons/key.png']
const randomIcon = photos[Math.floor(Math.random() * photos.length)]
const photo = thought.user.imageUrl? thought.user.imageUrl : randomIcon


    // userIds who liked this thought
    const [likes, setLikes] = useState([...thought.likes])
    
    return (
        <div style={{border: "4px solid gray"}}>
            <Link to={`/user/${thought.user.username}`}>{thought.user.username} thought of this</Link>
            <img src={photo} style={{height: '100px'}} alt="Profile picture"/>
            <Link to={`/thought/${thought._id}`}>
            <h1>{thought.thought}</h1>
            <h3>{thought.comments.length} comments</h3>
            </Link>

            <h1>{likes.length} likes</h1>

            {(likes.includes(user._id))? <UnlikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} /> : 
            <LikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} />}

{user.username === thought.user.username && 
           <Link to={`/thought/edit/${thought._id}`}>Having second thoughts?</Link>}

           <DeleteButton thought={thought} user={user}/>
        </div>
    )
}

export default ThoughtCard