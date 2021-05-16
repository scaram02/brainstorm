import axios from 'axios';
import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import DeleteButton from './buttons/DeleteButton'
import ThoughtList from './ThoughtList'
// import Loading from './Loading'
import '../stylesheets/feed.css'


const FollowedFeed = ({user}) => {


    return (
       
        <div>
          
             <div>
            <h1 className="header">Followed thoughts</h1>
            <ThoughtList user={user} />
        </div>
        </div> 
    )
}
export default FollowedFeed