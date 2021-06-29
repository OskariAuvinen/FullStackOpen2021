import React from 'react'
import Input from './Input'

const Form = ({ country, setCountry}) => {
    return(
        <form>
           Find Countries: <Input 
           country = {country}
           setCountry = {setCountry}
           />
        </form>
    )
}

export default Form