import React, { useState } from 'react'
const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.hitAPI(searchTerm)
        setSearchTerm('')
    }
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input type='text'
                id='artist'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <input type='submit' value="Let's go!" />
        </form>
    )
}

export default Search