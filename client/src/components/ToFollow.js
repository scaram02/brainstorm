import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ToFollow = () => {

    const [allUsers, setAllUsers] = useState([])

    const getAllUsers = () => {
        axios.get('api/auth')
        .then(res => setAllUsers(res.data))
    }

    useEffect(() => {
        getAllUsers()
    })
// this is currently a list of allusers, need to change it later to just those not following
        return (
            <div>
                <h1>to follwo</h1>
            {allUsers.length? (
                allUsers.map((user, i) => (
                    <div>
                        <h4>{user.username}</h4>
                        <button>follow</button>
                    </div>
                ))
            ) : <h1>no users yet</h1>}
            </div>
        )
    
}


export default ToFollow