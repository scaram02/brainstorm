// import React from 'react'

// const ThoughtForm = props => {

//     const blankThought = {thought: '', numUpvotes: 0, upvotedBy: []}
//     const [thought, setThought] = useState(blankThought)

//     const handleInputChange = e => {
//         const {name, value} = e.target;

//         setThought({...thought, [name]: value})
//         props.setAllThoughts({...props.allThoughts, thought})
//     }


    
//         return (
//             <div>
//             <form onSubmit={props.handleSubmit}>
//             <textarea 
//             type="text" 
//             name="thought" 
//             value={thought.thought} 
//             placeholder='add a thought'
//             onChange={handleInputChange}/>
           
//             <button>{props.submitButton}</button>
//             </form>
//             </div>
//         )
// }

// export default ThoughtForm