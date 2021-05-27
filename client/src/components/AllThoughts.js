import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'
import ThoughtList from './ThoughtList'
import Loading from './Loading'



const AllThoughts = ({user, allThoughts, setAllThoughts,}) => {

    const [loading, setLoading] = useState(true)


const getAllThoughts = () => {
    axios.get(`/api/thought`)
            .then(res => {
                console.log('I BIMS, STILL THE DATA', res.data)
                const sortedThoughts = res.data.sort((a,b) => a.createdAt - b.createdAt).reverse()
                setAllThoughts(sortedThoughts)
}).then(() => setLoading(false))}

useEffect(() => {
 getAllThoughts()
},) 

const message = "Be the first to share your thoughts"
console.log('am I alllll the thoughs?', allThoughts)

    return (
        <div>
            {loading? <Loading /> : 
            <div>
       <h1 className="header">Thoughts to explore</h1>
       <ThoughtList thoughtList={allThoughts} user={user} message={message} />
       </div>
            }
        </div>
    )
}

export default AllThoughts