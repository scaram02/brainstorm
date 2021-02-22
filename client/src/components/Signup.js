import React, {useState} from 'react'
import { signup } from "../services/auth";

const Signup = () => {
    
    const blankForm = {username: '', password: ''}
    const [user, setUser] = useState(blankForm)
    const [error, setError] = useState('')


    const handleInputChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        signup(user.username, user.password)
        .then(data => {
            if (data.message) {
                setError(data.message)
            } else {
                this.props.setCurrentUser(data)
                console.log(user)
            }
        })
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
        <input type="password" name="password" placeholder="password" value={user.password} onChange={handleInputChange}/>

          </form>
        </div>
    )
}

export default Signup