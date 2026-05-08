import React from 'react'
import Search from './Search'
import Album from './Album'
const MusicApp = (props) => {
    return (
        <div>
            <h1>Music App</h1>
            <Search hitAPI={props.hitAPI} />
            <h2>Search Results:</h2>
                <div className="flex-container">
                {props.searchResults.map((album) => {
                    return (<Album 
                        key={album.id}
                        id={album.id}
                        thumb={album.thumb}
                        artist={album.artist}
                        title={album.title}
                        year={album.year}
                        addToCollection={props.addToCollection}
                        removeFromCollection={props.removeFromCollection}
                        />)
                })}
                </div>
        </div>
    )
}

export default MusicApp