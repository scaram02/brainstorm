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


// handleFileChange = (e) => {
//     let imgSizeLimit = 5000000; //5MB
//     let allowedFormat = ["image/jpeg", "image/png"];
//     let chosenFile = e.target.files[0];

//     if (!chosenFile) {
//       this.setState({
//         canUpdateImg: false,
//         imageUrl: this.state.originalImgUrl,
//       });
//       return;
//     }

//     if (chosenFile.size > imgSizeLimit) {
//       this.setState({
//         canUpdateImg: false,
//         photoMessage: "Size of image should be less than 5MB",
//         imageUrl: this.state.originalImgUrl,
//       });
//       return;
//     }

//     if (allowedFormat.indexOf(chosenFile.type) < 0) {
//       this.setState({
//         canUpdateImg: false,
//         photoMessage: "Format of image should be jpeg or png",
//         imageUrl: this.state.originalImgUrl,
//       });
//       return;
//     }

//     const uploadData = new FormData();
//     uploadData.append("imageUrl", e.target.files[0]);
//     // imageUrl => this name has to be the same as in the model since we pass
//     // req.body to .create() method when creating a new thing in '/api/things/create' POST route

//     this.setState({ uploadOn: true, photoMessage: "" });

//     handleUpload(uploadData)
//       .then((response) => {
//         this.setState({
//           imageUrl: response.secure_url,
//           uploadOn: false,
//           canUpdateImg: true,
//           photoMessage: "",
//         });
//       })
//       .catch((err) => {
//         console.log("Error while uploading the file: ", err);
//       });
//   };







//   handleSubmitFile = (e) => {
//     e.preventDefault();

//     if (this.state.uploadOn) return; // do nothing if the file is still being uploaded
//     axios
//       .put(`/api/user/profile-pic/${this.state.username}`, {
//         imageUrl: this.state.imageUrl,
//       })
//       .then((response) => {
//         this.setState({
//           imageUrl: response.data.imageUrl,
//           photoMessage: "Image has been updated successfully",
//           canUpdateImg: false,
//         });
//         this.props.setUser(response.data);
//       })
//       .catch((error) => console.log(error));
//   };