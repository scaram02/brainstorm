import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'

import ThoughtCard from './ThoughtCard'


const ThoughtList2 = ({user, thoughtList}) => {


return (
    <div>
        {thoughtList.length? thoughtList.map((thought) => (
            <div key={thought._id}>
                <ThoughtCard thought={thought} user={user} /> 
            </div>
        )) : <h1>Nothing here yet</h1>}
    </div>
)
}

export default ThoughtList2