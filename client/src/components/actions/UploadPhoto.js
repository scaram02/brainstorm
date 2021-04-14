import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UploadPhoto = () => {


    const [photoToUpload, setPhotoToUpload] = useState()
    const [imageUrl, setImageUrl] = useState('')

    const handleChange = e => {
        setPhotoToUpload(e.target.files[0]);
        console.log(e.target.files[0])

        const imageUpload = new FormData()
        imageUpload.append("imageUrl", e.target.files[0])
    
        

    const handleUpload = theImage => {
        axios.post('api/user/photo/upload', theImage)
        .then(res => res.data)
        .catch((err => {
            console.log(err)
        }))
    }

  handleUpload(imageUpload)
        // .then((res) =>{
        //     setImageUrl(res.secure_url)
        //     // console.log('resss', res)
        // })
      }

      

    return (
        <div style={{backgroundColor: 'violet'}}>
            <form>
           <h1>upload foto</h1>
           <input type="file" onChange={handleChange} />
           </form>
        </div>
    )
}

export default UploadPhoto