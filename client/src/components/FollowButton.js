import React, {useState} from 'react'
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

// // unfollow
// const [unfollowed, setUnfollowed] = useState(false)
// const unfollowUser = userId => {
//     console.log('frontend userId', userId)
//     axios.put(`/api/follow/unfollow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
//     .then(() => {
//         setUnfollowed(true)
//         console.log(unfollowed)
//     })
//     .catch(err => console.log(err))
// }

    return (
        <div>
    <button onClick={() => {
        followUser(user._id)
        }}>Follow</button>
        {/* <button onClick={() => unfollowUser(user._id)}>UNFOLLOW</button> */}
        </div>
    )
}

export default FollowButton