import React from "react"
import {Spinner} from 'react-bootstrap'
import '../stylesheets/home.css'


const Loading = () => {

    return (
        <div className="loading">
              <Spinner animation="border" variant="success" > 
              <span className="sr-only">Loading...</span>
              </Spinner>
            <h1 style={{color: 'rgb(80, 96, 134)'}}>Loading</h1>
        </div>
    )
}

export default Loading