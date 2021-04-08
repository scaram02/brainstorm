import React, {useState} from 'react'
import axios from 'axios'

const UnlikeButton = ({user, thoughtToLike, likes, setLikes}) => {



    const unlikeThought = userId => {
        axios.post(`/api/like/unlike/${thoughtToLike._id}`, {likes: userId})
        .then(() => {
        //    console.log('fix me')
        const hm = likes.filter((l) => l != thoughtToLike._id)
        setLikes(hm)

        })
        .catch(err => console.log(err))
    }



    return (
        <div>

<button onClick={() => unlikeThought(user._id)}>Un the like</button>

        </div>
    )
}


export default UnlikeButton