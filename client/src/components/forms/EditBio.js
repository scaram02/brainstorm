import React, { useState } from 'react'
import axios from 'axios'

const EditBio = ({getTheProfile, profile, setBio, bio}) => {



    const handleSubmit = e => {
        e.preventDefault()
        
        if (!bio.bio)return;

        axios.put(`/api/user/edit/${profile._id}`, {
            bio: bio
        })
        .then((res) => getTheProfile())
    }



    const handleInputChange = e => {
        const {name, value} = e.target;

        setBio({...bio.bio, [name]: value})
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="bio" value={bio.bio || ""} placeholder="your bio here" onChange={handleInputChange}/>
                <button>Edit bio</button>
            </form>
        </div>
    )
}

export default EditBio