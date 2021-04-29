import React, {useState} from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'

const UnlikeButton = ({user, thoughtToLike, likes, setLikes}) => {



    const unlikeThought = userId => {
        axios.post(`/api/like/unlike/${thoughtToLike._id}`, {likes: userId})
        .then(() => {
        const hm = likes.filter((l) => l != userId)
        setLikes(hm)
        })
        .catch(err => console.log(err))
    }



    return (
        <div>

<Button onClick={() => unlikeThought(user._id)}>Un the like</Button>

        </div>
    )
}


export default UnlikeButton