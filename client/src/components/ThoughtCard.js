import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import LikeButton from './buttons/LikeButton'
import UnlikeButton from './buttons/UnlikeButton'
import DeleteButton from './buttons/DeleteButton'
import {Card} from 'react-bootstrap'
import '../stylesheets/feed.css'

const ThoughtCard = ({thought, user}) => {

const photos = ['../profile-icons/brain.png', '../profile-icons/book.png', '../profile-icons/lightbulb.png', '../profile-icons/lightning.png', '../profile-icons/thought.png', '../profile-icons/key.png']
const randomIcon = photos[Math.floor(Math.random() * photos.length)]
const photo = thought.user.imageUrl? thought.user.imageUrl : randomIcon


    // userIds who liked this thought
    const [likes, setLikes] = useState([...thought.likes])
    const likesWordS = likes.length === 1? "like" : "likes"
    const commentWordS = thought.comments.length === 1? 'comment' : 'comments'
    
    return (
        <div className="thought-card">
            <Card className="text-center">
            
            <Card.Body>
                <img src={photo} className='profile-pic' alt="Profile picture"/>
            <Link to={`/user/${thought.user.username}`}>{thought.user.username} thought of this</Link>
         
            <Link to={`/thought/${thought._id}`} className="thought-link">
            <Card.Text as="h1">{thought.thought}</Card.Text>
            </Link>

            {/* do u like me yes/no */}
            {(likes.includes(user._id))? <UnlikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} /> : 
            <LikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} />}
            
          {user.username === thought.user.username && 
           <Link to={`/thought/edit/${thought._id}`}>Having second thoughts?</Link>}

           <DeleteButton thought={thought} user={user}/>
           </Card.Body>
           <Card.Footer className="text-muted">{thought.comments.length} {commentWordS} {likes.length} {likesWordS} {thought.updatedAt}
</Card.Footer>
           </Card>
        </div>
    )
}

export default ThoughtCard