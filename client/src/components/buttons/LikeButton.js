import React, {useState} from 'react'
import axios from 'axios'

const LikeButton = ({user, thoughtToLike, likes, setLikes}) => {


    const likeThought = userId => {
        axios.post(`/api/like/${thoughtToLike._id}`, {likes: userId})
        .then(() => {
            const newObj = [...thoughtToLike.likes, userId]
            thoughtToLike.likes.includes(userId)? setLikes(thoughtToLike.likes) : setLikes(newObj)
        })
        .catch(err => console.log(err))
    }


    const unlikeThought = userId => {
        axios.post(`/api/like/unlike/${thoughtToLike._id}`, {likes: userId})
        .then(() => {
            console.log('also fix this lol')
            // const filteredLikes = likes.filter((l) => l != userId)
            // setLikes(filteredLikes)

        })
        .catch(err => console.log(err))
    }



    return (
        <div>

<button onClick={() => likeThought(user._id)}>Like</button>  
{/* <button onClick={() => unlikeThought(user._id)}>Un the like</button> */}

        </div>
    )
}


export default LikeButton