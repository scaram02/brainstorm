import React, { Profiler } from 'react'


const EditBio = ({handleSubmit, profile}) => {

    const handleInputChange = e => {
        const {name, value} = e.target;

        // not done with this, add setter here
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