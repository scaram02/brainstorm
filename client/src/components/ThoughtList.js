import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'


const ThoughtList = props => {

const [allThoughts, setAllThoughts] = useState(props.allThoughts)

// I think I need to make this a normal const and then just add the funciton into here useEffect
// at the very least pls rename
useEffect(() => {
    const fetchData = async() => {
        const result = await axios(
            `/api/thought`
        )
        // console.log("result : ", result.data)
        setAllThoughts(result.data)
      }
    fetchData()
    // props.getTheThought()
}) 
// add or take away the [] depending

console.log('the data is this', allThoughts)
    return (
        <div className='thought-container'>
       {allThoughts.length? (
           allThoughts
           .map
           ((thought, i) => (
             <div key={i} className="thought">
            
            <Link to={`/thought/${thought._id}`}>
            
            <h1>{thought.thought}</h1>
            <h2 style={{color: 'blue'}}>{thought.user.username} thought of this</h2>
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