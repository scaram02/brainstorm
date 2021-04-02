import React from 'react'
import axios from 'axios'
import '../../stylesheets/profile.css'

const FollowButton = ({ user, userToFollow, setFollowers}) => {

    

const followUser = userId => {
    axios.post(`/api/follow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
    .then(() => {
       const newObj = [...userToFollow.followers, userId]
       setFollowers(newObj)
       console.log(newObj)
    })
    .catch(err => console.log(err))
}
// can I make this one buttoNn with unfollow? 

    return (
        <div>
    <button className="followButton" onClick={() => followUser(user._id)}>Follow</button>
        </div>
    )
}

export default FollowButton