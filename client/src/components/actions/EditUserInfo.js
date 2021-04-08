import axios from 'axios'
import React, {useState, useEffect} from 'react'
import EditBio from '../forms/EditBio'

const EditUserInfo = ({profile}) => {

// but if im going to move this i should move it now so can render properly

    const handleSubmit = e => {
        e.preventDefault()
        console.log('gotta make a ackend route')
        axios.put(`/api/user/edit/${profile._id}`, {
            bio: profile.bio
        })
        .then((res) => console.log(res.status))
    }


    return (
        <div style={{border: "3px solid blue"}}>
            <h1>EditUserInfo component</h1>
            <h2>move me later to separate link/page</h2>
            <EditBio handleSubmit={handleSubmit} profile={profile}/>
        </div>
    )
}

export default EditUserInfo