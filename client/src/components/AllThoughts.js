import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'
import ThoughtList from './ThoughtList'


const AllThoughts = ({user, allThoughts, setAllThoughts}) => {

const [likes, setLikes] = useState([])

const getAllThoughts = () => {
    axios.get(`/api/thought`)
            .then(res => {
                console.log("res.data", res.data)
                setAllThoughts(res.data)
                const likedPosts = allThoughts.filter((p) => p.likes.includes(user._id))
                setLikes(likedPosts)
            })
}

useEffect(() => {
 getAllThoughts()
}, []) 

const message = "Be the first to share your thoughts"

    return (
        <div>
       <h1>main feed</h1>
       <ThoughtList thoughtList={allThoughts} user={user} message={message} likes={likes} setLikes={setLikes}/>

        </div>
    )
}

export default AllThoughts