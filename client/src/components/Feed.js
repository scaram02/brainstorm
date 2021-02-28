import React from 'react'
import Thought from "./forms/Thought"

const Feed = props => {
    return (
        <div>
            <h1>welcome, {props.user.username}</h1>
            <Thought />
        </div>
    )
}

export default Feed