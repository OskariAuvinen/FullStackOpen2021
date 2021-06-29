import React from 'react'
import Weather from './Weather'

const Country = ({ weather, setWeather, filteredCountries }) => {
    // console.log(filteredCountries)
    return(
        <div>
            <h3>{filteredCountries[0].name}</h3>
            <br></br>
            Capital {filteredCountries[0].capital}
            <br></br>
            Population {filteredCountries[0].population}
            <h4>Languages:</h4>
            <ul>
                {filteredCountries[0].languages.map((language, i) => (<li key={i}>{language.name}</li>))}
            </ul>
            <img src={filteredCountries[0].flag} width={300} height={200} alt="not found"/>
            <Weather 
            filteredCountries={filteredCountries}
            weather={weather}
            setWeather={setWeather}
            />
        </div>
    )
}

export default Country