import React from 'react'
import axios from 'axios'

const FollowButton = props => {

const userToFollow = props.userToFollow;
const user = props.user
console.log(user)

// goes with previous model not embedded. if i use this again change user to userToFollow
// const followUser = userId => {
//     console.log('i am he userId', userId)
//         axios.put(`/auth/follow/${user._id}`, {
//         followers: userId,
//         user: user
//     })
//     .then((res) => console.log(res.status, ', followed:  ', userId))
// }

const followUser = userId => {
    axios.post(`/api/follow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
    .then(console.log('here we go again, ', userToFollow._id))
    .catch(err => console.log(err))
}


const unfollowUser = userId => {
    console.log('frontend userId', userId)
    axios.put(`/api/follow/unfollow/${userToFollow._id}`, {followers: userId})
    .then(() => {
        console.log('hah')
        // something here?
    })
    .catch(err => console.log(err))
}

    return (
        <div>
    <button onClick={() => followUser(user._id)}>Follow</button>
    <button onClick={() => unfollowUser(user._id)}>unfollow them now</button>
    {/* the followbutton should work for userToFollow._id */}
    {/* <button onClick={() => followUser(userToFollow._id)}>follow them now</button> */}

        </div>
    )
}

export default FollowButton