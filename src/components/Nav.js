import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo.svg'
const Nav = () => {
    return (
        <nav>
            <h3 className='name'>Music Search using <img src={Logo} width={50} alt="logo" /> React and Discogs API</h3>
            <ul className='main-nav'>
                <Link to ='/'>
                    <li>Music App</li>
                </Link>
                <Link to='/collection'>
                    <li>Collection</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav