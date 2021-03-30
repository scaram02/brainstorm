import React from 'react'
import axios from 'axios'

const FollowButton = ({ user, userToFollow, setFollowers}) => {

    

const followUser = userId => {
    axios.post(`/api/follow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
    .then(() => {
       const newObj = [...userToFollow.followers, userId]
       setFollowers(newObj)
    })
    .catch(err => console.log(err))
}


    return (
        <div>
    <button onClick={() => followUser(user._id)}>Follow</button>
        </div>
    )
}

export default FollowButton