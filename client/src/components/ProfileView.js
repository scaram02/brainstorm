import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import FollowButton from './buttons/FollowButton'
import UnfollowButton from './buttons/UnfollowButton'
import EditUserInfo from './actions/EditUserInfo'
import ThoughtCard from './ThoughtCard'
import ThoughtForm from './forms/ThoughtForm'
import ProfileNav from './ProfileNav'
import '../stylesheets/feed.css'


const ProfileView = props => {


// const photos = ['../profile-icons/brain.png', '../profile-icons/book.png', '../profile-icons/lightbulb.png', '../profile-icons/lightning.png', '../profile-icons/thought.png', '../profile-icons/key.png']
// const randomIcon = photos[Math.floor(Math.random() * photos.length)]


    const [profile, setProfile] = useState([])
    const [allThoughts, setAllThoughts] = useState([])
    const [loading, setLoading] = useState(true)
    const [followers, setFollowers] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    // const [profilePic, setProfilePic] = useState('')
    const [bio, setBio] = useState('')
    // const [likes, setLikes] = useState()


    const getTheProfile = () => {
        const username = props.match.params.username
        axios
        .get(`/api/auth/${username}`)
        .then(res => {
            setProfile(res.data)
            setFollowers(res.data.followers)
            // setProfilePic(res.data.imageUrl)
            setBio({bio: res.data.bio})
        })
        .then(
            axios.get(`/api/thought`)
            .then(res => setAllThoughts(res.data))
        )
        .then(() => setLoading(false))
    }

    const toggleEdit = () => {
        setShowEdit(!showEdit)
    }

    useEffect(() => {
        getTheProfile()
    },[])


    const isSameUser = profile.username === props.user.username

// make the classes for the thoughts lsit the same as those on the Feed so they can be stolen from feed.css, then rename feed.css

    return (
        <div>
            {loading? <h1>loading...</h1> : 
            <div>
                <ProfileNav username={props.user.username}/>
                <img src={profile.imageUrl} style={{height: '450px'}} alt="Error: Try submitting your profile pic again"/>
                {/* <img src= style={{height: '450px'}} alt="nopeee"/> */}
               
                <h1>Profile: {profile.username}</h1>
                <div style={{backgroundColor: 'tan'}}>
                    {isSameUser && <button onClick={toggleEdit}>edit profile</button>}
               {showEdit && <EditUserInfo profile={profile} getTheProfile={getTheProfile}  bio={bio} setBio={setBio} getTheProfile={getTheProfile}/>}
               </div>
                <h2> {followers.length} followers</h2>
                <h1>bio: {profile.bio}</h1>

              {allThoughts.length? (
              allThoughts.filter((t) => t.user.username === profile.username)
              .map((t) => (
                  <div key={t._id} className="thought-card-container">
                {/* <ThoughtCard user={t.user} thought={t}/> */}
                <Link to={`/thought/${t._id}`}>{t.thought}</Link>
                      </div>
              ))) : <h1>nothing to display</h1>} 

                
                <Link to='/feed'>home</Link>

{/* show follow/unfollow button */}
 {followers.includes(props.user._id)? 
 <UnfollowButton  
 followers={followers} 
 setFollowers={setFollowers} 
 userToFollow={profile} 
 user={props.user} /> 
 : <FollowButton 
 setFollowers={setFollowers} 
 userToFollow={profile} 
 user={props.user} />}

        </div>
}
        </div>
    )
}

export default ProfileView