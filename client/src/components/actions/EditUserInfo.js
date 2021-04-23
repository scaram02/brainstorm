import axios from 'axios'
import React, {useState, useEffect} from 'react'
import EditBio from '../forms/EditBio'
import UploadPhoto from './UploadPhoto'

const EditUserInfo = ({profile}) => {

// why is there no backend bio
const [bio, setBio] = useState({bio: ''})

    const handleSubmit = e => {
        e.preventDefault()
        console.log('gotta make a ackend route')
        axios.put(`/api/user/edit/${profile._id}`, {
            bio: bio
        })
        .then((res) => console.log(res.status))
    }


    return (
        <div style={{border: "3px solid blue"}}>
            <h1>EditUserInfo component</h1>
            <UploadPhoto user={profile}/>
            <EditBio handleSubmit={handleSubmit} profile={profile} bio={bio} setBio={setBio}/>
        </div>
    )
}

export default EditUserInfo