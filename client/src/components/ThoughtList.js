import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'

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
}) // currently no [] props to prevent render



    return (
        <div>
       {data.length? (
           data
           .map
           ((thought, i) => (
             <div key={i}>
            <h1>{thought.thought}</h1>
            <DeleteButton thought={thought} user={props.user}/>
            </div>
           ))
       ) : 
       <h1>no thoughts to display</h1>}  
        </div>
    )
}

export default ThoughtList