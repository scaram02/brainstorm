import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'
import Hm from './ThoughtList'



const FollowedFeed = ({user}) => {

    const userId = user._id

    const [feedThoughts, setFeedThoughts] = useState([])

    const getFollowedFeed = userId => {
        axios.get(`/api/thought/followed/:${userId}`)
        .then(res => setFeedThoughts(res.data))
        .then(console.log(feedThoughts))
    }

    useEffect(() => {
        getFollowedFeed(userId)
    }, [])



    return (
        <div>
            <h1>folloed feed</h1>
            <Hm user={user} thoughtList={feedThoughts} />
        </div>
    )
}
export default FollowedFeed