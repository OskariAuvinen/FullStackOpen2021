import React, { useEffect, useState } from 'react';
import Form from './Components/Form'
import axios from 'axios'
import Countries from './Components/Countries';

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [weather, setWeather] = useState({})

  useEffect (() => {
    axios
      .get('https://restcountries.eu/rest/v2/all').then(response =>{
        const countryArray = response.data
        setCountries(countryArray)
    })

  }, [])

  return (
    <div className="App">
    <Form 
    country = {country}
    setCountry = {setCountry}
    />
    <Countries
    country = {country}
    setCountry = {setCountry} 
    countries = {countries}
    setCountries = {setCountries}
    weather = {weather}
    setWeather = {setWeather}
    />
    </div>
  );
}

export default App;
