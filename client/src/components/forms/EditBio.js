import React, { useState } from 'react'


const EditBio = ({handleSubmit, profile, setBio, bio}) => {



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