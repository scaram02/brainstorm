import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'

import Hm from './Hm'


const ThoughtList2 = ({user, thoughtList, message,}) => {


return (
    <div>
        {thoughtList.length? thoughtList.map((thought) => (
            <div key={thought._id}>
                <Hm thought={thought} user={user}  />
            </div>
        )) : <h1>nope</h1>}
    </div>
)
}

export default ThoughtList2