import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import FollowButton from './FollowButton'
import UnfollowButton from './UnfollowButton'


const ProfileView = props => {

    const [profile, setProfile] = useState([])
    const [allThoughts, setAllThoughts] = useState([])
    const [loading, setLoading] = useState(true)
    const [followers, setFollowers] = useState([])


    const getTheProfile = () => {
        const username = props.match.params.username
        axios
        .get(`/api/auth/${username}`)
        .then(res => {
            setProfile(res.data)
            setFollowers(res.data.followers)
            setLoading(false)
        })
        .then(
            axios.get(`/api/thought`)
            .then(res => setAllThoughts(res.data))
        )
    }

    useEffect(() => {
        getTheProfile()
        console.log('profile followign: ', profile)
    }, [])


  
    return (
        <div>
            {loading? <h1>loading...</h1> : 
            <div>
                <h1>Profile: {profile.username}</h1>
                <h2> {followers.length} followers</h2>
              {allThoughts.length? (
              allThoughts.filter((t) => t.user.username === profile.username).map((t, i) => (
                  <div key={i}>
                <h1>{t.thought}</h1>
                      </div>
              ))) : <h1>nothing to display</h1>} 

                
                <Link to='/feed'>home</Link>


 {followers.includes(props.user._id)? 
 <UnfollowButton followers={followers} setFollowers={setFollowers} userToFollow={profile} user={props.user} /> 
 : <FollowButton setFollowers={setFollowers} userToFollow={profile} user={props.user} />}
        </div>
}
        </div>
    )
}

export default ProfileView