import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'

const Auth = (props) => {

  const blankForm = {username: '', password: ''}
    const [user, setUser] = useState(blankForm)
    const [error, setError] = useState('')


    const handleInputChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.authFunction(user.username, user.password)
        .then(data => {
            if (data.message) {
                setError(data.message)
            } else {
                props.setCurrentUser(data)
                props.history.push("/feed")
            }
        })
    }


    return (
        <div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>{props.buttonText}</h1>
<div className="input-container">
        <input type="text" name="username" placeholder="username" value={user.username} onChange={handleInputChange}/></div>
        <div className="input-container">
        <input type="password" name="password" placeholder="password" value={user.password} onChange={handleInputChange}/>
        </div>
        <button>{props.buttonText}</button>
        <div>
              {error && (
                <Alert className="alert" variant="danger">
                  {error}
                </Alert>
              )}
            </div>
          </form>
        </div>
    )
}

export default Auth
