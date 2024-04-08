import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Link to={'/'}>Home</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'/Signup'}>Signup</Link>
        </>
    )
}

export default Navbar