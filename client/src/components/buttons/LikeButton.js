import React, {useState} from 'react'
import axios from 'axios'

const LikeButton = ({user, thoughtToLike}) => {



    const likeThought = userId => {
        axios.post(`/api/like/${thoughtToLike._id}`, {likes: userId})
        .then(() => {
            console.log('fix this later')
        })
        .catch(err => console.log(err))
    }

    // this could be made logical but later

    const unlikeThought = userId => {
        axios.post(`/api/like/unlike/${thoughtToLike._id}`, {likes: userId})
        .then(() => {
            console.log('also fix this lol')
        })
        .catch(err => console.log(err))
    }



    return (
        <div>
{/* {thoughtToLike.likes.includes(user._id)? 
<button onClick={() => likeThought(user._id)}>Like</button>  : 
<button onClick={() => unlikeThought(user._id)}>Un the like</button>    }  */}
<button onClick={() => likeThought(user._id)}>Like</button> 
<button onClick={() => unlikeThought(user._id)}>Un the like</button>

        </div>
    )
}


export default LikeButton