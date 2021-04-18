import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/notes'>
                    <li>Notes</li>
                </Link>
                <Link to='/search'>
                    <li>Search</li>
                </Link>
                <Link to='/contactus'>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
