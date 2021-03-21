import React from 'react'
import axios from 'axios'

const FollowButton = props => {

const userToFollow = props.userToFollow;
const user = props.user
console.log(user)


const followUser = userId => {
    axios.post(`/api/follow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
    .then(console.log('here we go again, ', userToFollow._id))
    .catch(err => console.log(err))
}

// const unfollowUser = userId => {
//     console.log('frontend userId', userId)
//     axios.put(`/api/follow/unfollow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
//     .then(() => {
//         console.log('hah')
//         // something here?
//     })
//     .catch(err => console.log(err))
// }

    return (
        <div>
    <button onClick={() => followUser(user._id)}>Follow</button>
        </div>
    )
}

export default FollowButton