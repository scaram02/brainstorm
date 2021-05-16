import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AddThought from "./actions/AddThought"
import AllThoughts from './AllThoughts'
import FollowedFeed from './FollowedFeed'
import FeedNav from './FeedNav'
import '../stylesheets/feed.css'
import Loading from './Loading'



const Feed = props => {

    const [clicked, setClicked] = useState(false)
 

    const loadFeed = () => {
        setClicked(!clicked)
    }


//    const feedToggle = clicked? "following" : "Explore all"


    return (
        <div className='feed-container'>
            <FeedNav loadFeed={loadFeed} clicked={clicked} username={props.user.username}/>
            <AddThought setAllThoughts={props.setAllThoughts} />
        

            {clicked? 
            <AllThoughts allThoughts={props.allThoughts} 
            setAllThoughts={props.setAllThoughts} 
            user={props.user}
                  /> 
                  : 
            <FollowedFeed  user={props.user}/>  
            // <Loading />
            }
            
           
                  
        </div>
    )
}

export default Feed