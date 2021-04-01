import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AddThought from "./actions/AddThought"
import AllThoughts from './AllThoughts'
import FollowedFeed from './FollowedFeed'
import '../stylesheets/feed.css'



const Feed = props => {

    const [clicked, setClicked] = useState(false)

    const loadFeed = () => {
        setClicked(!clicked)
    }

    return (
        <div className='feed-container'>
             <Link to='/feed'>home</Link>
            <h1>welcome, {props.user.username}</h1>
            <AddThought 
                  setAllThoughts={props.setAllThoughts} />
                  <div style={{backgroundColor: 'pink'}}>
                      <p onClick={loadFeed}>Toggle Feed!</p>
                      </div>

            {clicked? 
            <FollowedFeed user={props.user}/> : 
            <AllThoughts allThoughts={props.allThoughts}
            setAllThoughts={props.setAllThoughts} 
            user={props.user}
                  /> }
            
           
                  
        </div>
    )
}

export default Feed