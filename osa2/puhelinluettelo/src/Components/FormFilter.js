import React from 'react'

const FormFilter =  ({ filter, setFilter }) => {

    const handleFilterChange = (e) => {
        e.preventDefault()
        setFilter(e.target.value)
    }

    return(
        <div>
            Filter: <input value={filter} onChange={handleFilterChange}></input>
        </div>
    )
}

export default FormFilter