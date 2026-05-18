import React, { useState, memo } from 'react'

const Album = memo((props) => {
    const [selected, setSelected] = useState(props.inCollection ?? false)
    const getStyle = () => {
        return {
            background: selected ? 'blue' : 'none'
        }
    }
    const handleClick = () => {
        if (selected) {
            props.removeFromCollection(props.id)
        } else {
            props.addToCollection({ id: props.id, thumb: props.thumb, artist: props.artist, title: props.title, year: props.year })
        }
        setSelected(!selected)
    }
    return (
        <figure onClick={handleClick} style={getStyle()}>
            <img src={props.thumb || null} alt={props.title} />
            <figcaption>
                <span className="title">{props.artist} {props.title}</span>&nbsp; {props.year}
            </figcaption>
        </figure>
    )
})
export default Album