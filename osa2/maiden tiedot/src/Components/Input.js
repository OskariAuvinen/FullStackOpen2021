import React from 'react'

const Input = ({ country, setCountry }) => {
    const handleCountrySearch = (e) => {
        e.preventDefault()
        setCountry(e.target.value)
    }
    return(
        <input value={country} onChange={handleCountrySearch}></input>
    )
}

export default Input