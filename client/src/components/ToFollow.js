import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FollowButton from './FollowButton'

const ToFollow = props => {

    // rename this to usersToFollow? Or keep as allUses and really make a separate array of ones to follow?
    const [allUsers, setAllUsers] = useState([])
    const [following, setFollowing] = useState([])

    const getAllUsers = () => {
        axios.get('api/auth')
        // .then(res => setAllUsers(res.data))
        .then(res => {
        const needToFollow = res.data.filter((f) => !props.user.following.includes(f._id))
       setAllUsers(needToFollow)
    })
    }

    useEffect(() => {
        getAllUsers()
        console.log(allUsers)
    }, [])

  
    
        return (
            <div>
                <h1>to follwo</h1>
            {allUsers.length? (
                allUsers.map((user, i) => (
                    <div key={i}>
                        <h4>{user.username}</h4>
                        <FollowButton userToFollow={user} user={props.user}/>
                    </div>
                ))
            ) : <h1>no users to follow</h1>}

            </div>
        )
    
}


export default ToFollow