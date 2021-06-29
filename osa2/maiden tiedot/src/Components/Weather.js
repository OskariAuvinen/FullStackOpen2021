import React, { useEffect } from 'react'
import axios from 'axios'

const Weather = ({ weather, setWeather, filteredCountries }) => {
    const accesKey = process.env.REACT_APP_API_KEY
    // console.log(filteredCountries[0].capital)
    let capital = filteredCountries[0].capital
    useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${accesKey}&q=${capital}&aqi=no`)
        .then(response =>{
            const data = response.data
            console.log(data)
            setWeather(data)
        })
    }, [])
    return(
        <div>
            <h3>Weather in {filteredCountries[0].capital} </h3>
            Temperature: {weather.current.temp_c} Celsius
            <br></br>
            <img src={weather.current.condition.icon}width={100} height={100} alt="not found"/>
            <br></br>
            Wind: {weather.current.wind_kph} kmp/h
        </div>
    )
}

export default Weather