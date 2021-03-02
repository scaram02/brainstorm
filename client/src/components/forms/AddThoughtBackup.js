
// import React, {useState} from 'react'
// import axios from 'axios'
// import ThoughtForm from '../forms/ThoughtForm'

// const AddThought = props => {


//     const handleSubmit = e => {
//         e.preventDefault()
//         if (!props.thought) return
//         props.setThought(props.blankThought)
//         console.log(thought)

       
//        axios
//        .post('/api/thought', {
//       // why wouldnt this destructure
//            thought: thought.thought.trim(),
//            numUpvotes: thought.numUpvotes,
//            upvotedBy: thought.upvotedBy, 
//            user: props.user
//        })
//        .then(data => {
//            console.log("----SUBMITTED----: ", data.data)
//        })
//        .catch( err => console.log(err))
//     }


//     const submitButton = "Think!!!"

//     return (
//         <div>
//            <ThoughtForm handleSubmit={handleSubmit} />
//         </div>
//     )
// }

// export default AddThought
