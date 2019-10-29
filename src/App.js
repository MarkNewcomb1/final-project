import React, {useState} from 'react';
import './base.css';
import './App.css';
import Nav from './components/Nav'
import MusicApp from './components/MusicApp'
import Collection from './components/Collection'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import secret from './secret'
const App = () => {
  const [searchResults, setSearchResults] = useState([])
  const [collection, setCollection] = useState([])
  // Your source folder isn't exposed to your webserver
  // so what's being returned is a 404 or 
  // other response which starts with XML opening tag <. It's
  // for this reason your local sample json needs to be in the
  // public folder. 

  const hitAPI = (searchTerm) => {
    // fetch('./sample-data.json')
    fetch(`https://api.discogs.com/database/search?q=${searchTerm}&token=${secret.APIKey}`)
    .then(res => res.json())
    .then(response => {
      setSearchResults(response.results)
    })
  }

  const addToCollection = (id) => {
    const theIds = [...collection].map((album) => album.id)
    if (!theIds.includes(id.id)) {
      setCollection([...collection, id])
    }
  }

  const removeFromCollection = (id) => {
    setCollection([...collection.filter((album)=> album.id !== id)])
  }

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
        <Route path='/' exact 
        render={(props) => <MusicApp {...props} 
        hitAPI={hitAPI} 
        searchResults={searchResults} 
        addToCollection={addToCollection} 
        removeFromCollection={removeFromCollection}
        /> }/>
        <Route path='/collection' 
        render={(props) => <Collection {...props} 
        collection={collection} 
        removeFromCollection={removeFromCollection}
        /> }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App
