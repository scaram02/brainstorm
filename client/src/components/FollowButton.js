import React from 'react'
import axios from 'axios'

const FollowButton = props => {

const user = props.user 


// goes with previous model not embedded
// const followUser = userId => {
//     console.log('i am he userId', userId)
//         axios.put(`/auth/follow/${user._id}`, {
//         followers: userId,
//         user: user
//     })
//     .then((res) => console.log(res.status, ', followed:  ', userId))
// }

const followUser = userId => {
    axios.post(`/api/follow/${user._id}`, {following: userId})
    .then(console.log('here we go again, ', user._id))
    .catch(err => console.log(err))
}

    return (
        <div>
      <button onClick={() => followUser(user._id)}>Follow</button>
        </div>
    )
}

export default FollowButton