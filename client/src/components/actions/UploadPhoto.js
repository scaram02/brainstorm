import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UploadPhoto = ({user, getTheProfile}) => {


const [fileInput, setFileInput] = useState('')
const [previewSource, setPreviewSource] = useState()
const [imageUrl, setImageUrl] = useState('')
const [submittedToCloudinary, setSubmittedToCloudinary] = useState(false)

const handleFileChange = e => {
    const file = e.target.files[0]
    previewFile(file)

    // uploadImage(previewSource) // remember that at this point the previewSource is the reader/data as url

    console.log('in filechagne prevsoure', previewSource)
}


// show the user they selected the file
// built-in js essentially
const previewFile = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file) // converts image to a url string?
    reader.onloadend = () => {
        setPreviewSource(reader.result)
    } 
}


const uploadImage = theImage => {
    console.log('theImage ur uploading', theImage)

  axios.post(`/api/user/photo/upload`, {imageUrl: theImage})
    .then((res) => {
        setImageUrl(res.data.secure_url) // data?
        setSubmittedToCloudinary(true)
    })
    .catch((err) => console.log(err))

}



const handleSubmit = e => {
    e.preventDefault()

    if (!previewSource) return;

    uploadImage(previewSource) // remember that at this point the previewSource is the reader/data as url
    
    axios.put(`/api/user/photo/${user.username}`,
        {imageUrl: imageUrl})
        .then(() => getTheProfile())
        .catch(err => console.log(err))
}


// console.log(imageUrl)

    return (
        <div>
            <form onSubmit={handleSubmit}>
        
           <input className="choose-file" type="file" onChange={handleFileChange} value={fileInput} accept="image/*"/> 
           {/* <label for="file">Choose a file</label> */}
           <button type='submit'>Upload</button>
           </form>
           {/* show preview string of selected foto */}
           {previewSource && <img src={previewSource} alt="image preview" style={{height: "150px"}}/>}
        </div>
    )
}

export default UploadPhoto