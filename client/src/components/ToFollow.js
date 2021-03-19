import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FollowButton from './FollowButton'

const ToFollow = props => {

    const [allUsers, setAllUsers] = useState([])
    const [following, setFollowing] = useState([])

    const getAllUsers = () => {
        axios.get('api/auth')
        .then(res => setAllUsers(res.data))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    // const followUser = () => {
    //     axios.put(`/auth/follow`, {followId: userId})
    //     .then(() => console.log("Folowoing: ", props.following))
    // }

  
    
// this is currently a list of allusers, need to change it later to just those not following
        return (
            <div>
                <h1>to follwo</h1>
            {allUsers.length? (
                allUsers.map((user, i) => (
                    <div key={i}>
                        <h4>{user.username}</h4>
                        {/* <button onClick={() => followUser(user._id)}>follow</button>  */}
                        <FollowButton userToFollow={user} user={props.user}/>
                      
                    </div>
                ))
            ) : <h1>no users yet</h1>}
            </div>
        )
    
}


export default ToFollow