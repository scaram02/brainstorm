import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ProfileView = props => {

    const [profile, setProfile] = useState([])

    const getTheProfile = () => {
        const username = props.match.params.username
        axios
        .get(`/api/auth/${username}`)
        .then(res => {
            setProfile(res.data)
        })
    }
    
    
    useEffect(() => {
        getTheProfile()
        console.log('this is the oprofile ioof', profile.username)
    })

    return (
        <div>
          <h1>Profile: {profile.username}</h1>
        </div>
    )
}

export default ProfileView