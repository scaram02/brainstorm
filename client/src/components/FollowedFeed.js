import axios from 'axios';
import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import DeleteButton from './buttons/DeleteButton'
import ThoughtList from './ThoughtList'
// import Loading from './Loading'
import '../stylesheets/feed.css'


const FollowedFeed = ({user}) => {
    const userId = user._id


    const [feedThoughts, setFeedThoughts] = useState([])
    const [loading, setLoading] = useState(true)


    const getFollowedFeed = userId => {
        axios.get(`/api/thought/followed/:${userId}`)
        .then(res => {
            const sortedThoughts = res.data.sort((a,b) => a.createdAt - b.createdAt).reverse()
            setFeedThoughts(sortedThoughts)
        })
        .then(setLoading(false))
    }

    useEffect(() => {
        getFollowedFeed(userId)
    },[])

    return (
       
        <div>
          
             <div>
            <h1 className="header">Followed thoughts</h1>
            <ThoughtList user={user} thoughtList={feedThoughts}/>
        </div>
        </div> 
    )
}
export default FollowedFeed