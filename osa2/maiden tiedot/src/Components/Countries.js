import React from 'react'
import Country from './Country'
import CountriesList from './CountriesList'
import CountryButton from './CountryButton'

const Countries = ({ weather, setWeather, country, countries, setCountry }) => {
    const filteredCountries = countries.filter(c => c.name.toLowerCase().substring(0, country.length) === country.toLowerCase())
    // console.log(filteredCountries)
    const filteredCountry = filteredCountries.length > 10 ? 'Too many matches or filter empty, specify another filter' : filteredCountries.map(
        (c, i ) => (<li key={i}>{c.name}<CountryButton setCountry = {setCountry} c={c}/></li> )
    )
    return(
        <div>
            {filteredCountries.length === 1 ? <Country weather = {weather} setWeather={setWeather} filteredCountries={filteredCountries}/> : <CountriesList filteredCountry={filteredCountry}/>}
        </div>
    )
}

export default Countries