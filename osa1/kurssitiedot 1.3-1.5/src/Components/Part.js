import React from 'react'

const Part = (props) => {
    // console.log(props)
    return(
        <div><strong>Part:</strong> {props.part.name} <strong>Exercises:</strong> {props.part.exercises}</div>
    )
}

export default Part