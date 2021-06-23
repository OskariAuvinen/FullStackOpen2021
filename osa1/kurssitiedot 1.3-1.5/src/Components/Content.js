import React from 'react'
import Part from './Part'

const Content = (props) => {
    return(
        <div>
        <br />  
            <Part part={props.parts[0]} />
                <br /> 
            <Part part={props.parts[1]} />
                <br /> 
            <Part part={props.parts[2]} />
                <br /> 
        </div>
    )
}

export default Content