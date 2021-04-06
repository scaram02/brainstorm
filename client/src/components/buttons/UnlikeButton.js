// import React, {useState} from 'react'
// import axios from 'axios'

// const UnlikeButton = ({user, thoughtToLike, setLikes, likes}) => {



//     const unlikeThought = userId => {
//         axios.post(`/api/like/unlike/${thoughtToLike._id}`, {likes: userId})
//         .then(() => {
//             const filteredLikes = likes.filter((l) => l != userId)
//             setLikes(filteredLikes)
//         })
//         .catch(err => console.log(err))
//     }



//     return (
//         <div>

// <button onClick={() => unlikeThought(user._id)}>Un the like</button>

//         </div>
//     )
// }


// export default UnlikeButton