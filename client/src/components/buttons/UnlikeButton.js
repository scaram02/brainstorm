import React, {useState} from 'react'
import axios from 'axios'
import like from '../../images/like.png'


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

{/* <button className="button" >Un the like</button> */}
<img src={like} alt="" onClick={() => unlikeThought(user._id)} className="likebulb"/>
        </div>
    )
}


export default UnlikeButton