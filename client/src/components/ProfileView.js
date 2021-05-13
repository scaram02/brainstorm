import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import FollowButton from './buttons/FollowButton'
import UnfollowButton from './buttons/UnfollowButton'
import EditUserInfo from './actions/EditUserInfo'
import ThoughtCard from './ThoughtCard'
import ThoughtForm from './forms/ThoughtForm'
import Nav from './ProfileNav'
// import '../stylesheets/feed.css'
import '../stylesheets/profile.css'
import edit from '../images/editlite.png'
import Loading from './Loading'



const ProfileView = props => {
    // clearUser={setCurrentUser}



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
    },[profile])


    const isSameUser = profile.username === props.user.username
    const filteredThoughtsByAuthor = allThoughts.filter((t) => t.user.username === profile.username)
// make the classes for the thoughts lsit the same as those on the Feed so they can be stolen from feed.css, then rename feed.css

    return (
        <div>
            {loading? <Loading/> : 
            <div>
                <Nav username={props.user.username} getTheProfile={getTheProfile}  clearUser={props.clearUser} isSameUser={isSameUser}/>
                <img className="profile-picture" src={profile.imageUrl} style={{height: '450px'}} alt="Error: Try submitting your profile pic again"/>
       
       
               <div className="profile-toggle-container">
                <h1>{profile.username}</h1>
                {isSameUser && <img src={edit} onClick={toggleEdit} alt="edit button" className="edit-button"/>}
                </div>

                <div>
               {showEdit && <EditUserInfo profile={profile} getTheProfile={getTheProfile}  bio={bio} setBio={setBio} getTheProfile={getTheProfile}/>}
               </div>

                <h2> {followers.length} followers</h2>
                <h1>{allThoughts.length} thoughts</h1>

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

                <h1>bio: {profile.bio}</h1>

              {allThoughts.length? (
              allThoughts.filter((t) => t.user.username === profile.username)
              .map((t) => (
                  <div key={t._id} >
                <ThoughtCard user={props.user} thought={t}/>
                {/* <Link to={`/thought/${t._id}`}>{t.thought}</Link> */}
                      </div>
              ))) : <h1>nothing to display</h1>} 

                
                <Link to='/feed'>home</Link>



        </div>
}
        </div>
    )
}

export default ProfileView