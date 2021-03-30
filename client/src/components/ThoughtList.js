import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'


const ThoughtList = props => {

const [allThoughts, setAllThoughts] = useState(props.allThoughts)

const getAllThoughts = () => {
    axios.get(`/api/thought`)
            .then(res => {
                console.log("res.data", res.data)
                setAllThoughts(res.data)})
}

useEffect(() => {
 getAllThoughts()
}, []) 
// add or take away the [] depending


    return (
        <div className='thought-container'>
       {allThoughts.length? (
           allThoughts
           .map
           ((thought, i) => (
             <div key={i} className="thought">
            <Link to={`/user/${thought.user.username}`}>{thought.user.username} thought of this</Link>
            <Link to={`/thought/${thought._id}`}>
            <h1>{thought.thought}</h1>
            <h3>{thought.comments.length} comments</h3>
            </Link>
           
           {props.user.username === thought.user.username && 
           <Link to={`/thought/edit/${thought._id}`}>Having second thoughts?</Link>}

           <DeleteButton thought={thought} user={props.user}/>
            </div>
          
           ))
       ) : 
       <h1>no thoughts to display</h1>}  

        </div>
    )
}

export default ThoughtList