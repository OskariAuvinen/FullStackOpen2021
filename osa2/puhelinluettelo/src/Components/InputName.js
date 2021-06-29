
import React from 'react'

const InputName = ({ newName, setNewName }) => {

    const handleInputNameChange = (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        setNewName(e.target.value)
    }

    return(
        <input value={newName} onChange={handleInputNameChange}></input>
    )
}

export default InputName