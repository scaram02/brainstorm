import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ProfileView = props => {

    const [profile, setProfile] = useState([])
    const [allThoughts, setAllThoughts] = useState([])

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
    // this is essentially the same as on ThoughtList. Need to redo.

    
    useEffect(() => {
        getTheProfile()
    })

    return (
        <div>
          <h1>Profile: {profile.username}</h1>
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