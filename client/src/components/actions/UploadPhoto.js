import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UploadPhoto = ({user}) => {


const [fileInput, setFileInput] = useState('')
const [previewSource, setPreviewSource] = useState()
const [imageUrl, setImageUrl] = useState('')
const [message, setMessage] = useState('')
const [submittedToCloudinary, setSubmittedToCloudinary] = useState(false)

const handleFileChange = e => {
    const file = e.target.files[0]
    previewFile(file)

    uploadImage(previewSource) // remember that at this point the previewSource is the reader/data as url
}

// show the user they selected the file
// built in js essentially
const previewFile = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file) // converts image to a url string?
    reader.onloadend = () => {
        setPreviewSource(reader.result)
    }
}


const handleSubmit = e => {
    e.preventDefault()

    if (!previewSource) return;

    axios.put(`/api/user/photo/${user.username}`,
        {imageUrl: imageUrl}
        // gonne need to reset the user here
        ).catch(err => console.log(err))

    // uploadImage(previewSource) 
}

const uploadImage = theImage => {
    console.log('theImage ur uploading', theImage)

  axios.post(`/api/user/photo/upload`, {imageUrl: theImage})
    .then((res) => {
        setMessage(res.data.msg)
        setImageUrl(res.data.secure_url)
        setSubmittedToCloudinary(true)
    })
}




    return (
        <div style={{backgroundColor: 'violet'}}>
            <form onSubmit={handleSubmit}>
            <img src={imageUrl} alt="profile picture" style={{height: "300px"}}/>

           <h1>upload foto</h1>
           {/* <button onClick={setUserPic(imageUrl)}> clicke me last</button> */}
           <h2>image url : {imageUrl}</h2>
           <h3 style={{color: "blue"}}>{message}</h3>
        
           <input type="file" onChange={handleFileChange} value={fileInput} accept="image/*"/> 
           <button type='submit'>submit</button>
           </form>
           {/* show preview string of selected foto */}
           {previewSource && <img src={previewSource} alt="image preview" style={{height: "150px"}}/>}
        </div>
    )
}

export default UploadPhoto


