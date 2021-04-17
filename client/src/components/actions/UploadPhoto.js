import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UploadPhoto = ({user}) => {


    const [photoToUpload, setPhotoToUpload] = useState()
    const [imageUrl, setImageUrl] = useState(null)

    const handleUploadSubmit = imageUrl => {
        axios.put(`api/user/photo/upload/${user._id}`, {imageUrl: imageUrl})
        .then(res => res.data)
        .catch((err => {
            console.log(err)
        }))
    }

    const handleChange = e => {
        // setPhotoToUpload(e.target.files[0]);
        console.log(e.target.files[0])

        const imageUpload = new FormData()
        imageUpload.append("imageUrl", e.target.files[0])
    
        
console.log('imageuplod', imageUpload, 'target fils', e.target.files[0])

  handleUploadSubmit(imageUpload)
        // .then(() =>{
    // // set all hte states here
            // setImageUrl('test test')
            // console.log('resss', res)
        // })
      }

     
     

    return (
        <div style={{backgroundColor: 'violet'}}>
            <form onSubmit={handleUploadSubmit}>
           <h1>upload foto</h1>
           <input type="file" onChange={handleChange} />
           </form>
        </div>
    )
}

export default UploadPhoto