import React from 'react'
import DeleteButton from './DeleteButton'

const Numbers = ({ persons, filter, setPersons, setNotification, setErrorMessage }) => {
    const filteredArray = persons.filter(person => person.name.toLowerCase().substring(0, filter.length) === filter.toLowerCase())
    const filtered = filter !== '' ? filteredArray.map((f, i ) => 
    (<li key={i}>{f.name} {f.number}<DeleteButton setNotification={setNotification} setErrorMessage={setErrorMessage} name={f.name} id={f.id} persons={persons} setPersons={setPersons}/></li>)) : persons.map((person, i ) =>
    (<li key={i}>{person.name} {person.number}<DeleteButton setNotification={setNotification} setErrorMessage={setErrorMessage} name={person.name} id={person.id} persons={persons} setPersons={setPersons}/></li>))
    return(
        <div>
            <h3>Numbers</h3>
            <ul>
            {filtered}
            </ul>
        </div>
    )
}

export default Numbers