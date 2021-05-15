import axios from 'axios'
import React, {useState, useEffect} from 'react'
import EditBio from '../forms/EditBio'
import UploadPhoto from './UploadPhoto'

const EditUserInfo = ({profile, profilePic, setProfilePic, bio, setBio, getTheProfile}) => {


    return (
        <div style={{border: "3px solid blue"}}>
            <UploadPhoto user={profile} getTheProfile={getTheProfile} />
            <EditBio getTheProfile={getTheProfile} profile={profile} bio={bio} setBio={setBio}/>
        </div>
    )
}

export default EditUserInfo