import axios from 'axios'
import React, {useState, useEffect} from 'react'
import EditBio from '../forms/EditBio'
import UploadPhoto from './UploadPhoto'

const EditUserInfo = ({profile, profilePic, setProfilePic, bio, setBio, getTheProfile}) => {


    

    const handleSubmit = e => {
        e.preventDefault()
        console.log('gotta make a ackend route')
        axios.put(`/api/user/edit/${profile._id}`, {
            bio: bio
        })
        .then((res) => getTheProfile())
    }


    return (
        <div style={{border: "3px solid blue"}}>
            <h1>EditUserInfo component</h1>
            <UploadPhoto user={profile} profilePic={profilePic} setProfilePic={setProfilePic}/>
            <EditBio handleSubmit={handleSubmit} profile={profile} bio={bio} setBio={setBio}/>
        </div>
    )
}

export default EditUserInfo