import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <h1>Logo</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </div>

        </nav>

    );
}

export default Navbar