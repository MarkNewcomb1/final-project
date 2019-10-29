import React, { useState } from 'react'

const Album = (props) => {
    const [selected, setSelected] = useState(false)
    const getStyle = () => {
        return {
            background: selected ? 'blue' : 'none'
        }
    }
    const handleClick = (id) => {
        if (selected) {
            props.removeFromCollection(id)
        } else if (props.addToCollection) {
            props.addToCollection(props)
        } else {
            props.removeFromCollection(id)
        }
        return setSelected(!selected)
    }
    return (<figure onClick={() => handleClick(props.id)} style={getStyle()}>
    <img src={props.thumb} alt={props.title} />
    <figcaption>
        <span className="title">{props.artist} {props.title}</span>&nbsp; {props.year}
    </figcaption>
</figure>)
}
export default Album