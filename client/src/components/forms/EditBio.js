import React, { useState } from 'react'


const EditBio = ({handleSubmit, profile}) => {

    const [bio, setBio] = useState('') // ?

    const handleInputChange = e => {
        const {name, value} = e.target;

        setBio({...bio, [name]: value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="bio" value={profile.bio} placeholder="your bio here" onChange={handleInputChange}/>
                <button>Edit bio</button>
            </form>
        </div>
    )
}

export default EditBio