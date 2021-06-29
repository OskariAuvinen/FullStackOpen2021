import React from 'react'
import services from '../services'

const DeleteButton = ({ name, id, persons, setPersons, setNotification, setErrorMessage }) => {
    const deleteHandler = (e) => {
        e.preventDefault()
        const confirm = window.confirm(`Delete ${name}?`)
        if (confirm === true){
            services
            .deleteNumber(id).then(response => {
                services.getAllNumbers()
                        .then(response =>{
                            const updated = response
                            setPersons(updated)
              })
                
                    
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(`${name} was already removed from server`)
                setTimeout(() =>{
                    setErrorMessage(null)
                }, 5000)
            })
        services.getAllNumbers()
            .then(persons => {
                setPersons(persons)
              })

        }
    }

    return(
        <button type="submit" onClick={deleteHandler}>delete</button>
    )
}
export default DeleteButton