import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Comments from './Comments'
import Loading from "./Loading"
import ProfileNav from './ProfileNav'
import '../stylesheets/thought-view.css'

const ThoughtView = props => {

const [thought, setThought] = useState(props.thought)
const [loading, setLoading] = useState(true)

console.log('thoughttttttt', thought)

const getTheThought = () => {
    const id = props.match.params.id
    axios
    .get(`/api/thought/${id}`)
    .then(res => {
        setThought(res.data)
    })
    .then(() => setLoading(false))
}

console.log("thought", thought)

useEffect(() => {
    getTheThought()
})

    return (
        <div>
            {loading? <Loading /> : 
            <div>
                <ProfileNav user={props.user.username}/>
        <img src={thought.user.imageUrl} alt="profile picture" className='profile-pic'/>
          <h1>{thought.user.username}</h1>
           <h1>{thought.thought}</h1>
           {/* <h2>{thought.likes.length} likes</h2> */}
           <Comments thought={thought} 
           getTheThought={getTheThought} 
           user={props.user} thought={thought} 
           allThoughts={props.allThoughts} 
           setAllThoughts={props.setAllThoughts}/>
        </div>
}
        </div>
           
    )
}

export default ThoughtView