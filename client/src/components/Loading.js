import React from "react"
import {Spinner} from 'react-bootstrap'


const Loading = () => {

    return (
        <div>
              <Spinner animation="border" variant="warning" > 
              <span className="sr-only">Loading...</span>
              </Spinner>
            <h1 style={{color: 'rgb(219, 241, 119)'}}>Loading</h1>
        </div>
    )
}

export default Loading