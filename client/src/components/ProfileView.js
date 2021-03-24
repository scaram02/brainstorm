import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FollowButton from './FollowButton'


const ProfileView = props => {

    const [profile, setProfile] = useState([])
    const [allThoughts, setAllThoughts] = useState([])
    const [clicked, setClicked] = useState(false)

    const isFollowing = props.user.following.includes(profile._id)
    // console.log('is the userfollowing? ', isFollowing)
    const [loggedInUserIsFollowing, setLoggedInUserIsFollowing] = useState(isFollowing)


    const getTheProfile = () => {
        const username = props.match.params.username
        axios
        .get(`/api/auth/${username}`)
        .then(res => {
            setProfile(res.data)
        })
        .then(
            axios.get(`/api/thought`)
            .then(res => setAllThoughts(res.data))
        )
    }


    const changeTheFrontend = () => {
        setClicked(true)
        setLoggedInUserIsFollowing(true)
    }
    
    useEffect(() => {
        getTheProfile()
    }, [])


    return (
        <div>
          <h1>Profile: {profile.username}</h1>
          {/* { props.user.following.includes(profile._id)? <h1>"You follow"</h1> : 
          <FollowButton userToFollow={profile} user={props.user} getAllUsers={getTheProfile}/> // would need to rename getAllUsers but needs to be this for now for the sake of getting to work. make more generic or move later
    } */}
    <div onClick={changeTheFrontend}>
   {(clicked || isFollowing)? <h1>Followed :D</h1> : <FollowButton userToFollow={profile} user={props.user} getAllUsers={getTheProfile}/>}
    </div>
         
          {allThoughts.length? (
              allThoughts.filter((t) => t.user.username === profile.username).map((t, i) => (
                  <div key={i}>
                <h1>{t.thought}</h1>
                      </div>
              ))) : <h1>nothing to display</h1>}
        </div>
    )
}

export default ProfileView