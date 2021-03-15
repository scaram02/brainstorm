import React from 'react'
import axios from 'axios'

const FollowButton = props => {

const user = props.user 

//  const followUser = userId => {
//      axios.put(`/auth/follow/${user._id}`, {
//         followers: userId,
//         // user: user // do I need this ??
//      })
//      .then((res) => console.log(res.status, ' + ', userId))
//      .then(console.log("followed on frontend only: ", user))
//  }

const followUser = userId => {
    console.log('i am he userId', userId)
    // axios.put(`/auth/follow/${user._id}`, {
        axios.get(`/auth/follow/${user._id}`, {
        followers: userId,
        user: user
    })
    .then((res) => console.log(res.status, ', followed:  ', userId))
}

    return (
        <div>
      <button onClick={() => followUser(user._id)}>Follow</button>
        </div>
    )
}

export default FollowButton