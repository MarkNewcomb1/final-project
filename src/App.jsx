import React, { useState } from 'react'
import './base.css'
import './App.css'
import Nav from './components/Nav'
import MusicApp from './components/MusicApp'
import Collection from './components/Collection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [searchResults, setSearchResults] = useState([])
  const [collection, setCollection] = useState([])

  const hitAPI = (searchTerm) => {
    fetch(`https://api.discogs.com/database/search?q=${searchTerm}&token=${import.meta.env.VITE_DISCOGS_KEY}`)
      .then(res => res.json())
      .then(response => {
        setSearchResults(response.results)
      })
  }

  const addToCollection = (album) => {
    setCollection(prev => prev.some(a => a.id === album.id) ? prev : [...prev, album])
  }

  const removeFromCollection = (id) => {
    setCollection(prev => prev.filter(album => album.id !== id))
  }

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={
            <MusicApp
              hitAPI={hitAPI}
              searchResults={searchResults}
              addToCollection={addToCollection}
              removeFromCollection={removeFromCollection}
            />
          } />
          <Route path='/collection' element={
            <Collection
              collection={collection}
              removeFromCollection={removeFromCollection}
            />
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
