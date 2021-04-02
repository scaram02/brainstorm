import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'
import ThoughtList from './ThoughtList'


const AllThoughts = ({user, allThoughts, setAllThoughts}) => {


const getAllThoughts = () => {
    axios.get(`/api/thought`)
            .then(res => {
                console.log("res.data", res.data)
                setAllThoughts(res.data)})
}

useEffect(() => {
 getAllThoughts()
}, []) 

const message = "Be the first to share your thoughts"

    return (
        <div>
       <h1>main feed</h1>
       {/* Hm = ThoughtList */}
       <ThoughtList thoughtList={allThoughts} user={user} message={message}/>
       {/* {allThoughts.length && allThoughts.map
           ((thought, i) => (
             <div key={i} className="thought">
            <Link to={`/user/${thought.user.username}`}>{thought.user.username} thought of this</Link>
            <Link to={`/thought/${thought._id}`}>
            <h1>{thought.thought}</h1>
            <h3>{thought.comments.length} comments</h3>
            </Link>
           
           {user.username === thought.user.username && 
           <Link to={`/thought/edit/${thought._id}`}>Having second thoughts?</Link>}

           <DeleteButton thought={thought} user={user}/>
            </div>
          
           ))
      }   */}

        </div>
    )
}

export default AllThoughts