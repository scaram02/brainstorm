import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UploadPhoto = ({user}) => {


   const [imageUrl, setImageUrl] = useState()
   const [image, setImage] = useState("");

   const handleChange = e => {
       setImageUrl(e.target.files[0])
       console.log(e.target.files[0])


//        axios.post(`/api/user/photo`, imageUrl)
//        .then((res) => setImageUrl(res.data.name))
//        .catch((err) => console.log(err))
   }






   const handleUploadSubmit = (e, imageUrl) => {
    e.preventDefault()


    const formData = new FormData()
    formData.append("imageUrl", imageUrl)
    // hwhat is being done with this. there is a disconnecg

    axios.put(`/api/user/photo/upload/${user._id}`, {imageUrl: imageUrl})
      .then((res) => {
          setImageUrl(res.data.imageUrl)
      })
   }




    return (
        <div style={{backgroundColor: 'violet'}}>
            <form onSubmit={handleUploadSubmit}>
           <h1>upload foto</h1>
           <input type="file" onChange={handleChange} accept="image/*"/>
           </form>
        </div>
    )
}

export default UploadPhoto


