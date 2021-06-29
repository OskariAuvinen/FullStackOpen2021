import React from 'react'

const Total = (props) => {
    const parts = props.course.parts.map(course => course.exercises)
    return(
        <div>
            Exercises total: {parts.reduce((s, p) => s + p)} tehtävää
        </div>
    )
}

export default Total