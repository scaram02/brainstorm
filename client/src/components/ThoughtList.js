import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'

import ThoughtCard from './ThoughtCard'


const ThoughtList2 = ({user, thoughtList, message}) => {


return (
    <div>
        {thoughtList.length? thoughtList.map((thought) => (
            <div key={thought._id}>
                <ThoughtCard thought={thought} user={user} /> 
            </div>
        )) : <h1>You are not following anyone yet</h1>}
    </div>
)
}

export default ThoughtList2