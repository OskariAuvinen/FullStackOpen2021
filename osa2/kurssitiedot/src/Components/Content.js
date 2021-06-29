import React from 'react'
import Part from './Part'

const Content = (props) => {
    // console.log(props)
    return(
        <div>
        <br />
        {props.parts.map((part, i) => <Part key={i} part={props.parts[i]} />)}  
        </div>
    )
}

export default Content