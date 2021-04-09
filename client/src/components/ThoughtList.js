// import axios from 'axios'
// import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import DeleteButton from './buttons/DeleteButton'
// import LikeButton from './buttons/LikeButton'
// import UnlikeButton from './buttons/UnlikeButton'
// import Hm from './Hm'

// const ThoughtList = ({user, thoughtList, message, likes, setLikes}) => {


// // maybe it's better to map out <Thought /> pass the props there and then be able to set the number of likes in sucha way. also cleaner? but idk maybe not

//     return (
//         <div>
// {thoughtList.length? 
// thoughtList
//            .map
//            ((thought) => (
//              <div key={thought._id} className="thought">
//             <Link to={`/user/${thought.user.username}`}>{thought.user.username} thought of this</Link>
//             <Link to={`/thought/${thought._id}`}>
//             <h1>{thought.thought}</h1>
//             <h3>{thought.comments.length} comments</h3>
//             </Link>

//             {(likes.includes(thought._id))? <UnlikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} /> : 
//             <LikeButton setLikes={setLikes} likes={likes} thoughtToLike={thought} user={user} />}
//             <p>{likes.length} likes...wrong length bc wrong array here</p>
//             <Hm thought={thought} />
//            {user.username === thought.user.username && 
//            <Link to={`/thought/edit/${thought._id}`}>Having second thoughts?</Link>}

//            <DeleteButton thought={thought} user={user}/>
//             </div>
          
//            )) : <h1>{message}</h1>
//       }  
//         </div>
//     )
// }

// export default ThoughtList