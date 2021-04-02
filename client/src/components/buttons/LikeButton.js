import React from 'react'
import axios from 'axios'

const LikeButton = ({user, thoughtToLike}) => {

    const likeThought = userId => {
        axios.post(`/api/like/${thoughtToLike}`, {likes: userId})
        .then(() => {
            console.log('fix this later')
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
<button onClick={() => likeThought(user._id)}>Like</button>
        </div>
    )
}


export default LikeButton