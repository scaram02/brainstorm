import React from 'react'
import axios from 'axios'
// import '../../stylesheets/profile.css'

const FollowButton = ({ user, userToFollow, setFollowers}) => {

    

const followUser = userId => {
    axios.post(`/api/follow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
    .then(() => {
    const newObj = [...userToFollow.followers, userId]
    // solves for the problem of following then going back, unfollowing then refollowing -> puts userId into array twice until component completely remounted 
    userToFollow.followers.includes(userId)? setFollowers(userToFollow.followers) : setFollowers(newObj)
    //    setFollowers(newObj)
       console.log('followers on FollowButton', newObj)
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