import React, { useState, useEffect } from 'react'
import './base.css'
import './App.css'
import Nav from './components/Nav'
import MusicApp from './components/MusicApp'
import Collection from './components/Collection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const BACKEND = 'http://localhost:3001'

const App = () => {
  const [searchResults, setSearchResults] = useState([])
  const [collection, setCollection] = useState([])

  useEffect(() => {
    fetch(`${BACKEND}/collection`)
      .then(res => res.json())
      .then(data => setCollection(data.map(a => ({
        id: a.discogs_id,
        thumb: a.cover_url,
        artist: a.artist,
        title: a.title,
        year: a.year
      }))))
      .catch(err => console.error('Failed to load collection:', err))
  }, [])

  const hitAPI = (searchTerm) => {
    fetch(`https://api.discogs.com/database/search?q=${searchTerm}&token=${import.meta.env.VITE_DISCOGS_KEY}`)
      .then(res => res.json())
      .then(response => setSearchResults(response.results))
  }

  const addToCollection = (album) => {
    if (collection.some(a => a.id === album.id)) return
    const [artist, ...titleParts] = (album.title || '').split(' - ')
    const title = titleParts.length ? titleParts.join(' - ') : artist
    fetch(`${BACKEND}/collection`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        discogs_id: album.id,
        title,
        artist,
        year: album.year,
        cover_url: album.thumb
      })
    })
      .then(() => setCollection(prev => [...prev, album]))
      .catch(err => console.error('Failed to add album:', err))
  }

  const removeFromCollection = (id) => {
    fetch(`${BACKEND}/collection/${id}`, { method: 'DELETE' })
      .then(() => setCollection(prev => prev.filter(a => a.id !== id)))
      .catch(err => console.error('Failed to remove album:', err))
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={
            <MusicApp
              hitAPI={hitAPI}
              searchResults={searchResults}
              collection={collection}
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
