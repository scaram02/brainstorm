import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FollowButton from './FollowButton'

const ToFollow = props => {

    // rename this to usersToFollow? Or keep as allUses and really make a separate array of ones to follow?
    const [allUsers, setAllUsers] = useState([])
    const [needToFollow, setNeedToFollow] = useState(allUsers)

    const getAllUsers = () => {
        axios.get('api/auth')
        // .then(res => {
        //     setAllUsers(res.data)
        // })
        .then(res => {
        const notFollowed = res.data.filter((f) => !props.user.following.includes(f._id))
       setAllUsers(notFollowed)
  
    })
    }


    useEffect(() => {
        getAllUsers()
        console.log(allUsers)
    })

    
        return (
            <div>
                <h1>to follwo</h1>
                {/* i mean this vaguely works upon refresh */}
            {allUsers.length? (
              allUsers.map((user) => (
                    <div key={user._id}>
                        <h4>{user.username}</h4>
                        <FollowButton userToFollow={user} user={props.user}/>
                    </div>
                ))
            ) : <h1>no users to follow</h1>}


        {/* {allUsers && allUsers.filter((f) => !props.user.following.includes(f._id)).map((user, i) => (
            <div key={i}>
                <h4>{user.username}</h4>
                <FollowButton userToFollow={user} user={props.user}/>

                </div>
        ))} */}
            </div>
        )
    
}


export default ToFollow

// https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render