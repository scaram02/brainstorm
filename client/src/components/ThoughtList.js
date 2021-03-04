import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link, Route} from 'react-router-dom'
import DeleteButton from './DeleteButton'
import EditThought from './EditThought'

const ThoughtList = props => {

const [data, setData] = useState({allThoughts: []})

// does this go here or like app.jssss
useEffect(() => {
    const fetchData = async() => {
        const result = await axios(
            `/api/thought`
        )
        console.log("result : ", result.data)
        setData(result.data)
    }
    fetchData()
}) 
// add or take away the [] depending


    return (
        <div>
           
       {data.length? (
           data
           .map
           ((thought, i) => (
             <div key={i}>
            <h1>{thought.thought}</h1>
            <DeleteButton thought={thought} user={props.user}/>
           {props.user.username === thought.user.username && <Link to={`/thought/${thought._id}`}>edit</Link>}
            </div>
           ))
       ) : 
       <h1>no thoughts to display</h1>}  

        </div>
    )
}

export default ThoughtList