import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FollowButton from './FollowButton'

const ToFollow = props => {

    const [allUsers, setAllUsers] = useState([])

// console.log('im the tmpArray', tmpArray)

// setAllUsers(prevValue => {                 return [...prevValue, res.data.info]             })


const getAllUsers = () => {
    axios.get('api/auth')
    .then(res => {
        setAllUsers(res.data)
        // console.log('-----????', allUsers)
    })
   
}


//     //RENAME ME
//     const getAllUsers = () => {
//         // const username = props.match.params.username
//         axios.get(`/api/auth/${props.user.username}`)
//         .then(res => {
//             console.log(res.data)
//             //setFollowing(res.data.following)
//             console.log("are we all the users.following?", res.data.following)
//             setAllUsers(res.data.following)
// // GET THE FOLLOwing here, add to the frontend array
// // on click, you send request to server
// // get object back, push into local frontend
//         })
//     }
// console.log("I AM THE USER id", props.user._id)

    useEffect(() => {
        getAllUsers()
        console.log(allUsers)
    })
   
   

    // console.log('AYE FOLOWED', followed)
    
        return (
            <div>
                <h1>to follwo</h1>
                {/* i mean this vaguely works upon refresh */}
            {allUsers.length? (
              allUsers.map((user) => (
                    <div key={user._id}>
                        <h4>{user.username}</h4>
                        
        
                        <FollowButton  userToFollow={user} user={props.user} allUsers={allUsers} setAllUsers={setAllUsers} getAllUsers={getAllUsers}/>
                    </div>
                ))
            ) : <h1>no users to follow</h1>}


        {/* {filtered && filtered.map((user) => (
            <div key={user._id}>
                <h4>{user.username}</h4>
                <FollowButton userToFollow={user} user={props.user} allUsers={allUsers} setAllUsers={setAllUsers}/>

                </div>
        ))} */}
            </div>
        )
    
}


export default ToFollow

// https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render