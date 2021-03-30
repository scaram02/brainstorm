import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const FollowedFeed = ({}) => {

    const [feedThoughts, setFeedThoughts] = useState([])

    const getFollowedFeed = () => {
        axios.get(`/api/thought/followed`)
        .then(res => setFeedThoughts(res.data))
        .then(console.log(feedThoughts))
    }

    useEffect(() => {
        getFollowedFeed()
    }, [])


    return (
        <div style={{backgroundColor: "green"}}>
            <p>hey im a filler</p>
            {/* {feedThoughts? (
                feedThoughts.map((t) => (
                    <div key={t._id}>
                        <h1>{t.thought}</h1>
                        </div> 
                ))
            ) : <h1>nope not yet</h1>} */}
        </div>
    )
}
export default FollowedFeed