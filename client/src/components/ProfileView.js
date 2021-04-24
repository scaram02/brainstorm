import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import FollowButton from './buttons/FollowButton'
import UnfollowButton from './buttons/UnfollowButton'
import EditUserInfo from './actions/EditUserInfo'
import UploadPhoto from './actions/UploadPhoto'
import brain from '../assets/profile-icons/brain.png'

const ProfileView = props => {


// maybe the profile image needs to be a child component with props


    const [profile, setProfile] = useState([])
    const [allThoughts, setAllThoughts] = useState([])
    const [loading, setLoading] = useState(true)
    const [followers, setFollowers] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const [profilePic, setProfilePic] = useState('')
    // const [bio, setBio] = useState({bio: ''})


    const getTheProfile = () => {
        const username = props.match.params.username
        axios
        .get(`/api/auth/${username}`)
        .then(res => {
            setProfile(res.data)
            setFollowers(res.data.followers)
            setProfilePic(res.data.imageUrl)
            // setBio(res.data.bio)
            setLoading(false)
        })
        .then(
            axios.get(`/api/thought`)
            .then(res => setAllThoughts(res.data))
        )
    }


    const toggleEdit = () => {
        setShowEdit(!showEdit)
    }

    useEffect(() => {
        getTheProfile()
    },[])


    const isSameUser = profile.username === props.user.username

    return (
        <div>
            {loading? <h1>loading...</h1> : 
            <div>
                <img src={profilePic} style={{height: '150'}} alt="Error: Try submitting your profile pic again"/>

                <h1>Profile: {profile.username}</h1>
                {/* <h1 onClick={toggleEdit}>Toggle Edit </h1> */}
                <div style={{backgroundColor: 'tan'}}>
                    {isSameUser && <button onClick={toggleEdit}>edit profile</button>}
               {showEdit && <EditUserInfo profile={profile} profilePic={profilePic} setProfilePic={setProfilePic}/>}
               </div>
                <h2> {followers.length} followers</h2>
                <h1>bio: {profile.bio}</h1>
              {allThoughts.length? (
              allThoughts.filter((t) => t.user.username === profile.username).map((t, i) => (
                  <div key={i}>
                <h1>{t.thought}</h1>
                      </div>
              ))) : <h1>nothing to display</h1>} 

                
                <Link to='/feed'>home</Link>

{/* show follow/unfollow button */}
 {followers.includes(props.user._id)? 
 <UnfollowButton  followers={followers} setFollowers={setFollowers} userToFollow={profile} user={props.user} /> 
 : <FollowButton setFollowers={setFollowers} userToFollow={profile} user={props.user} />}

        </div>
}
        </div>
    )
}

export default ProfileView