import React from 'react'


const InputNumber = ({ newNumber, setNewNumber }) => {
    const handleInputNumberChange = (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        setNewNumber(e.target.value)
    }

    return(
        <input value={newNumber} onChange={handleInputNumberChange}></input>
    )
}

export default InputNumber