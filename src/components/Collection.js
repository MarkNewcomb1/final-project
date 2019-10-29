import React from 'react'
import Album from './Album'
export default function Collection(props) {
    return (
        <div>
            <h1>Collection</h1>
            <div className="flex-container">
            {props.collection.map((album) => {
                return (<Album 
                    key={album.id}
                    id={album.id}
                    thumb={album.thumb}
                    artist={album.artist}
                    title={album.title}
                    year={album.year}
                    removeFromCollection={props.removeFromCollection}
                    />)
            })}
            </div>
        </div>
    )
}
