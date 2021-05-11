import axios from 'axios';
import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import DeleteButton from './buttons/DeleteButton'
import ThoughtList from './ThoughtList'
import Loading from './Loading'
import '../stylesheets/feed.css'


const FollowedFeed = ({user, likes, setLikes, }) => {

    const userId = user._id


    const [feedThoughts, setFeedThoughts] = useState([])
    const [loading, setLoading] = useState(true)


    const getFollowedFeed = userId => {
        axios.get(`/api/thought/followed/:${userId}`)
        .then(res => {
            setFeedThoughts(res.data)
        })
        .then(setLoading(false))
    }

    useEffect(() => {
        getFollowedFeed(userId)
    },[])


    return (
       
        <div>
             {loading? <Loading/> :
             <div>
            <h1>Followed Thoughts</h1>
            <ThoughtList user={user} thoughtList={feedThoughts}/>
        </div>}
        </div> 
    )
}
export default FollowedFeed