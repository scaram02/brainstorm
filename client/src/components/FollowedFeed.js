import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const FollowedFeed = ({userId}) => {

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
        <div style={{backgroundColor: "green"}}>
            <p>hey im a filler</p>
            {feedThoughts? (
                feedThoughts.map((t) => (
                    <div key={t._id}>
                        <h1>{t.thought}</h1>
                        <h2>hey this is reusing code, can you fix this or nah?</h2>
                        </div> 
                ))
            ) : <h1>nope not yet</h1>}
        </div>
    )
}
export default FollowedFeed