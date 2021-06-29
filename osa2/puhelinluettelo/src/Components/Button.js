import React from 'react'
import services from '../services'

const Button = ({ newName, setNewName, persons, setPersons, newNumber, setNewNumber, setNotification, setErrorMessage }) => {
    const submitHandler = (e) =>{
        let includesnewName = false
        let ifError = false
        e.preventDefault()
        for(let i = 0; i < persons.length; i++){
            if (persons[i].name === newName){
                includesnewName = true
                break;
            }
        }
        if (includesnewName === false && newName !== "") {
            const body = {
                name: newName,
                number: newNumber
                }
            services.postNewNumber(body)
                .then(response => {
                    console.log(response)
                    services.getAllNumbers()
                        .then(response =>{
                            const updated = response
                            setPersons(updated)
                        })
                        console.log("setting notification state")
                        setNotification(
                            `Added ${newName}`
                          )
                            setTimeout(() => {
                                setNotification(null)
                            }, 5000)
            })
            setNewName("")
            setNewNumber("")
        } else {
            const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)
            if(confirm === true){
                let id = 0
                for(let i = 0; i < persons.length; i++){
                    if (persons[i].name === newName){
                        id = persons[i].id
                        break;
                    }
                }
                const body = {
                    name: newName,
                    number: newNumber,
                    id: id
                    }
                    services.updateNumber(id, body)
                    .then(response =>{
                        console.log("updated")
                        console.log(response)
                        services.getAllNumbers()
                        .then(response =>{
                            const updated = response
                            setPersons(updated)
                        })
                        
                    })
                    .catch(error => {
                        ifError = true
                        console.log(error)
                        setErrorMessage(`${body.name} was already removed from server`)
                        setTimeout(() =>{
                            setErrorMessage(null)
                        }, 5000)
                    })
            if (ifError === false){
                setNotification(
                    `Changed number of ${newName} to ${newNumber}`
                  )
                    setTimeout(() => {
                        setNotification(null)
                    }, 5000)

            }
            }
            setNewName("")
            setNewNumber("")
        }
        includesnewName = false
        ifError = false
    }
    
    return(
        <button onClick={submitHandler}type="submit">add</button>
    )
}

export default Button