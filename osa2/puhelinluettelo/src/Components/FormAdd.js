import React from 'react'
import InputName from './InputName'
import Button from './Button'
import InputNumber from './InputNumber'

const FormAdd = ({ newName, setNewName, persons, setPersons, newNumber, setNewNumber, setNotification, setErrorMessage }) => {

    return(
        <form>
            name: <InputName 
            newName = {newName}
            setNewName = {setNewName}
            />
            <br></br>
            number: <InputNumber
            newNumber = {newNumber}
            setNewNumber = {setNewNumber} 
            />
            <br></br>
            <Button
            newName = {newName}
            setNewName = {setNewName} 
            persons = {persons}
            setPersons = {setPersons}
            newNumber = {newNumber}
            setNewNumber = {setNewNumber}
            setNotification = {setNotification}
            setErrorMessage = {setErrorMessage}
            />
        </form>
    )
}

export default FormAdd