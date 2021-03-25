import React from 'react'


const ThoughtForm = props => {

   

    const handleInputChange = e => {
        const {name, value} = e.target;

        props.setThought({...props.thought, [name]: value})
        props.setAllThoughts({...props.allThoughts, ...props.thought})
    }


    
        return (
            <div> 
            <form className="addThought" onSubmit={props.handleSubmit}>
            <input 
            type="text" 
            name="thought" 
            value={props.thought.thought} 
            placeholder='your thought here'
            onChange={handleInputChange}/>
           
            <button>{props.submitButton}</button>
            </form>
            </div>
        )
}

export default ThoughtForm