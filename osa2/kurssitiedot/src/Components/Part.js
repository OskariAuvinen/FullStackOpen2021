import React from 'react'

const Part = (props) => {
    // console.log(props)
    return(
        <div><strong>Part:</strong> {props.part.name} <strong>Exercises:</strong> {props.part.exercises}
        <br></br>
        </div>
    )
}

export default Part