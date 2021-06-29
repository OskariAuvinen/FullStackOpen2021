import axios from 'axios'
const allNumbersURL = 'http://localhost:3001/persons'

const getAllNumbers = () => {
    const request = axios.get(allNumbersURL)
    return request.then(response => response.data)
}

const postNewNumber = newNumber => {
    const request = axios.post(allNumbersURL, newNumber)
    return request.then(response => response.data)

}

const updateNumber = (id, newNumber) => {
    const request = axios.put(`${allNumbersURL}/${id}`, newNumber)
    return request.then(response => response.data)

}

const deleteNumber = (id) => {
    const request = axios.delete(`${allNumbersURL}/${id}`)
    return request.then(response => response.data)
}

export default { getAllNumbers, postNewNumber, updateNumber, deleteNumber }