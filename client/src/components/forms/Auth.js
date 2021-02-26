import React, {useState} from 'react'

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
                // console.log(`${user.username} has been logged in`)
            }
        })
    }


    return (
        <div>
        <h1>rendered in Auth.js now</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="usaname" value={user.username} onChange={handleInputChange}/>
        <input type="password" name="password" placeholder="password" value={user.password} onChange={handleInputChange}/>
        <button>gooo</button>
        <div>
              {error && (
                <p className="alert" variant="danger">
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>
    )
}

export default Auth
