import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UploadPhoto = () => {


    const [photoToUpload, setPhotoToUpload] = useState()

    const handleChange = e => {
        setPhotoToUpload(e.target.files[0]);
      }

    return (
        <div style={{backgroundColor: 'violet'}}>
           <h1>upload foto</h1>
        </div>
    )
}

export default UploadPhoto