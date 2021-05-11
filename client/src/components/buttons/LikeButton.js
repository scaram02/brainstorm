import React, {useState} from 'react'
import axios from 'axios'
import unlike from '../../images/unlike.png'

const LikeButton = ({user, thoughtToLike, likes, setLikes}) => {


    const likeThought = userId => {
        axios.post(`/api/like/${thoughtToLike._id}`, {likes: userId})
        .then(() => {
            const newObj = [...thoughtToLike.likes, userId]
            thoughtToLike.likes.includes(userId)? setLikes(thoughtToLike.likes) : setLikes(newObj)
        })
        .catch(err => console.log(err))
    }


// move button styles to their own stylesheet?

    return (
        <div>

{/* <button className="button"  >Like</button>   */}
<img src={unlike} alt="like" onClick={() => likeThought(user._id)} className="likebulb"/>
        </div>
    )
}


export default LikeButton