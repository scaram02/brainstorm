import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'
import ThoughtList from './ThoughtList'



const FollowedFeed = ({user}) => {

    const userId = user._id

        // make this one object later
    const [feedThoughts, setFeedThoughts] = useState([])
    const [loading, setLoading] = useState(true)


    const getFollowedFeed = userId => {
        axios.get(`/api/thought/followed/:${userId}`)
        .then(res => setFeedThoughts(res.data))
        .then(setLoading(false))
    }

    useEffect(() => {
        getFollowedFeed(userId)
    }, [])

    const message = " "


    return (
       
        <div>
             {loading? <h1 style={{color: "red"}}>uhhhhhhh</h1> :
             <div>
            <h1>folloed feed</h1>
            <ThoughtList user={user} thoughtList={feedThoughts} message={message}/>
        </div>}
        </div> 
    )
}
export default FollowedFeed