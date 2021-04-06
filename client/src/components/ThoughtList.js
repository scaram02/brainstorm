import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './buttons/DeleteButton'
import LikeButton from './buttons/LikeButton'
// import UnlikeButton from './buttons/UnlikeButton'

const ThoughtList = ({user, thoughtList, message}) => {


    return (
        <div>
{thoughtList.length? 
thoughtList
           .map
           ((thought, i) => (
             <div key={i} className="thought">
            <Link to={`/user/${thought.user.username}`}>{thought.user.username} thought of this</Link>
            <Link to={`/thought/${thought._id}`}>
            <h1>{thought.thought}</h1>
            <h3>{thought.comments.length} comments</h3>
            </Link>

            <LikeButton thoughtToLike={thought} user={user} />

           {user.username === thought.user.username && 
           <Link to={`/thought/edit/${thought._id}`}>Having second thoughts?</Link>}

           <DeleteButton thought={thought} user={user}/>
            </div>
          
           )) : <h1>{message}</h1>
      }  
        </div>
    )
}

export default ThoughtList