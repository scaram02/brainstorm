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
import edit from '../images/edit.png'
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
            .then(res => {
                const sortedThoughts = res.data.sort((a,b) => a.updatedAt - b.updatedAt).reverse()
                setAllThoughts(sortedThoughts)})
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
    const s = filteredThoughtsByAuthor.length !== 1? 's' : ''
    const followerS = followers.length !== 1? 'followers' : 'follower'
// make the classes for the thoughts lsit the same as those on the Feed so they can be stolen from feed.css, then rename feed.css

    return (
        <div className="p-container">
            {loading? <Loading/> : 
            <div>
                <Nav username={props.user.username} getTheProfile={getTheProfile}  clearUser={props.clearUser} isSameUser={isSameUser}/>
                <img className="p-profile-picture" src={profile.imageUrl} alt="Error: Try submitting your profile pic again"/>
       
       
               <div className="profile-toggle-container">
                <h1>{profile.username[0].toUpperCase() + profile.username.slice(1)}</h1>
                {isSameUser && <img src={edit} onClick={toggleEdit} alt="edit button" className="edit-button"/>}
                </div>

                <div>
               {showEdit && <EditUserInfo profile={profile} getTheProfile={getTheProfile}  bio={bio} setBio={setBio} getTheProfile={getTheProfile}/>}
               </div>

                <div className="profile-info">
                <h3>{filteredThoughtsByAuthor.length} thought{s} |</h3>
                <h3 style={{marginLeft: "5px"}}>{followers.length} {followerS}</h3>
                </div>

                {/* show follow/unfollow button but not for yourself */}
                {!isSameUser? followers.includes(props.user._id)? 
                <UnfollowButton  
                 followers={followers} 
                 setFollowers={setFollowers} 
                 userToFollow={profile} 
                 user={props.user} /> 
                 : <FollowButton 
                 setFollowers={setFollowers} 
                userToFollow={profile} 
                user={props.user} /> : <div/>}

                <h2 className="bio">{profile.bio}</h2>

              {allThoughts.length? (
              allThoughts.filter((t) => t.user.username === profile.username)
              .map((t) => (
                  <div key={t._id} >
                <ThoughtCard user={props.user} thought={t}/>
                {/* <Link to={`/thought/${t._id}`}>{t.thought}</Link> */}
                      </div>
              ))) : <h1 style={{color: 'rgb(80, 96, 134)'}}>Nothing to display yet!</h1>} 



        </div>
}
        </div>
    )
}

export default ProfileView