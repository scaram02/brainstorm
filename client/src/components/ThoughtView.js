import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Comments from './Comments'
import Loading from "./Loading"
import Nav from './ProfileNav'
import '../stylesheets/thought-view.css'

const ThoughtView = props => {

const [thought, setThought] = useState(props.thought)
const [loading, setLoading] = useState(true)



const getTheThought = () => {
    const id = props.match.params.id
    axios
    .get(`/api/thought/${id}`)
    .then(res => {
        setThought(res.data)
    })
    .then(() => setLoading(false))
}


useEffect(() => {
    getTheThought()
})

    return (
        <div>
            {loading? <Loading /> : 
            <div>
               
            <Nav username={props.user.username}/>
            <div className="author-container">
          <img src={thought.user.imageUrl} alt="profile picture" className='thought-profile-pic'/>
          <h1>{thought.user.username}</h1>
          </div>
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