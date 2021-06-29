import React from 'react'

const CountryButton = ({ c, setCountry}) => {
    const showSelectedHandler = (e) => {
        e.preventDefault()
        setCountry(c.name)
    }
    return(
        <button type="submit" onClick={showSelectedHandler}>show</button>
    )
}

export default CountryButton