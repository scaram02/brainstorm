import React, {useState} from 'react'
import axios from 'axios'

const UnfollowButton = ({ user, userToFollow, setFollowers, followers}) => {


// unfollow

const unfollowUser = userId => {
    axios.post(`/api/follow/unfollow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
    .then(() => {
        const filteredOut = followers.filter((f) => f != userId)
        setFollowers(filteredOut)
    })
    .catch(err => console.log(err))
}

    return (
        <div>
    <button onClick={() => {
        unfollowUser(user._id)
        }}>Unfollow</button>
        </div>
    )
}

export default UnfollowButton