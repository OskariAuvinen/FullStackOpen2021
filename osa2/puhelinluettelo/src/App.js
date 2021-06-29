import React, { useState, useEffect } from 'react'
import FormAdd from './Components/FormAdd'
import Numbers from './Components/Numbers'
import FormFilter from './Components/FormFilter'
import Notification from './Components/Notification'
import services from './services'
import Error from './Components/Error'

const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ persons, setPersons] = useState([])
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    services
      .getAllNumbers()  
      .then(persons => {
        setPersons(persons)
      })
  }, [setPersons])


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notification={notification}/>
      <Error errorMessage={errorMessage}/>
      <FormFilter 
      filter = {filter}
      setFilter = {setFilter}
      />
      <h3>Add new contact</h3>
      <FormAdd
      newName = {newName}
      setNewName = {setNewName}
      persons = {persons}
      setPersons = {setPersons}
      newNumber = {newNumber}
      setNewNumber = {setNewNumber}
      setNotification = {setNotification}
      setErrorMessage = {setErrorMessage} 
      />
      <Numbers 
      persons={persons}
      filter = {filter}
      setPersons = {setPersons}
      setNotification = {setNotification}
      setErrorMessage = {setErrorMessage}  
      />
    </div>
  )

}

export default App