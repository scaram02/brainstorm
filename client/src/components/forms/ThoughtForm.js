import React from 'react'

const ThoughtForm = props => {

    // need to do same as login and move everything over so add and edit can share form
    
        return (
            <div>
            <form onSubmit={handleSubmit}>
            <textarea 
            type="text" 
            name="thought" 
            value={thought.thought} 
            placeholder='add a thought'
            onChange={handleInputChange}/>
           
            <button>Think!</button>
            </form>
            </div>
        )
}

export default ThoughtForm