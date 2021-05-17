import React, { useState } from 'react'
import axios from 'axios'

const EditBio = ({getTheProfile, profile}) => {

// const [fake, setFake] = useState(profile.bio)
const [bio, setBio] = useState(profile.bio || '')

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

        setBio({...bio, [name]: value})
//         setFake({fake, [name]: value})
//   console.log(fake) 
    }
 // richtig bio.bio

    return (
        <div className="edit-bio">
            <form onSubmit={handleSubmit}>
                <input type="text" name="bio" value={bio.bio} placeholder="your bio here" onChange={handleInputChange}/>
                {/* <input type="text" name="fake" value={fake.fake} placeholder="fake" onChange={handleInputChange}/> */}
                <button>Edit bio</button>
            </form>
        </div>
    )
}

export default EditBio