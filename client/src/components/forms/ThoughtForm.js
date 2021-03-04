import React from 'react'

const ThoughtForm = props => {

   

    const handleInputChange = e => {
        const {name, value} = e.target;

        props.setThought({...props.thought, [name]: value})
        props.setAllThoughts({...props.allThoughts, ...props.thought})
    }


    
        return (
            <div>
            <form onSubmit={props.handleSubmit}>
            <textarea 
            type="text" 
            name="thought" 
            value={props.thought.thought} 
            placeholder='your thougth here'
            onChange={handleInputChange}/>
           
            <button>{props.submitButton}</button>
            {/* <button>submit</button> */}
            </form>
            </div>
        )
}

export default ThoughtForm