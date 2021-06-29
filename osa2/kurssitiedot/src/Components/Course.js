import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) =>{
    // console.log(course.parts[0].exercises)
    // console.log(course.parts)
    
    
    return(
    <div>
        <Header course={course} />
        <Content 
        parts={course.parts}
        />
        <Total course={course}/>
    </div>
    )
}

export default Course