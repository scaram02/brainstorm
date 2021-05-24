import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'
import Loading from './Loading'
import "../stylesheets/feed.css"

import ThoughtCard from './ThoughtCard'


const ThoughtList = ({user, thoughtList}) => {

    const userId = user._id

    // const [feedThoughts, setFeedThoughts] = useState([])
    // const [loading, setLoading] = useState(true)


    // const getFollowedFeed = userId => {
    //     axios.get(`/api/thought/followed/:${userId}`)
    //     .then(res => {
    //         const sortedThoughts = res.data.sort((a,b) => a.updatedAt - b.updatedAt).reverse()
    //         setFeedThoughts(sortedThoughts)
    //     })
    //     .then(setLoading(false))
    // }


    //   useEffect(() => {
    //     getFollowedFeed(userId)
    // },[])

return (
    <div>
        {/* {loading? <Loading /> : */}
        {thoughtList.length? thoughtList.map((thought) => (
            <div key={thought._id}>
                <ThoughtCard thought={thought} user={user} /> 
            </div>
        )) : <h1 className="nothing">Nothing here yet</h1>}
    </div>
)
}

export default ThoughtList