import React, {useState} from 'react'
import axios from 'axios'

const FollowButton = ({ user, userToFollow, allUsers, setAllUsers, setProfile, profile, setShowFollow}) => {


const followUser = userId => {
    axios.post(`/api/follow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
    .then(data => {
    //    const newObj = [...userToFollow.followers, userId]
        // setAllUsers(newObj)

        // from video
      setProfile((prevState) => {
          return {
              ...prevState, 
              user: {...prevState.user,
            followers: [...prevState.user.followers, data._id]} // not sure aou this line
          }
      })
        console.log('---updATED: ' , profile)
        setShowFollow(false)
    })
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
    <button onClick={() => {
        followUser(user._id)
        }}>Follow</button>
        </div>
    )
}

export default FollowButton


// import React, {useState} from 'react'
// import axios from 'axios'

// const FollowButton = ({ user, userToFollow, allUsers, setAllUsers}) => {


// const followUser = userId => {
//     axios.post(`/api/follow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
//     .then(() => {
//         const newList = allUsers.filter((f) => f !== userToFollow._id)
//         setAllUsers(newList)
//         console.log('aalllll users' , allUsers)
//     })
//     .catch(err => console.log(err))
// }


// // const unfollowUser = userId => {
// //     console.log('frontend userId', userId)
// //     axios.put(`/api/follow/unfollow/${userToFollow._id}`, {followers: userId, following: userToFollow._id})
// //     .then(() => {
// //         console.log('hah')
// //         // something here?
// //     })
// //     .catch(err => console.log(err))
// // }

//     return (
//         <div>
//     <button onClick={() => {
//         followUser(user._id)
//         }}>Follow</button>
//         </div>
//     )
// }