import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'
import ThoughtList from './ThoughtList'
import Loading from './Loading'



const FollowedFeed = ({user, likes, setLikes}) => {

    const userId = user._id


    const [feedThoughts, setFeedThoughts] = useState([])
    const [loading, setLoading] = useState(true)


    const getFollowedFeed = userId => {
        axios.get(`/api/thought/followed/:${userId}`)
        .then(res => {
            setFeedThoughts(res.data)
            const likedPosts = res.data.filter((t) => t.likes.includes(user._id)).map((t) => t._id)
            setLikes(likedPosts)
        })
        .then(setLoading(false))
    }

    useEffect(() => {
        getFollowedFeed(userId)
    }, [])

    const message = " "


    return (
       
        <div>
             {loading? <Loading/> :
             <div>
            <h1>folloed feed</h1>
            <ThoughtList user={user} thoughtList={feedThoughts} message={message}  likes={likes} setLikes={setLikes}/>
        </div>}
        </div> 
    )
}
export default FollowedFeed