import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'
import ThoughtList from './ThoughtList'
import Loading from './Loading'



const AllThoughts = ({user, allThoughts, setAllThoughts}) => {

    const [loading, setLoading] = useState(true)


const getAllThoughts = () => {
    axios.get(`/api/thought`)
            .then(res => {
                console.log("res.data", res.data)
                setAllThoughts(res.data)
}).then(() => setLoading(false))}

useEffect(() => {
 getAllThoughts()
},[]) 

const message = "Be the first to share your thoughts"

    return (
        <div>
            {loading? <Loading /> : 
            <div>
       <h1>main feed</h1>
       <ThoughtList thoughtList={allThoughts} user={user} message={message} />
       </div>
            }
        </div>
    )
}

export default AllThoughts