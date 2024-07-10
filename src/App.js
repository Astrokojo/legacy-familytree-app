import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

export default function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Contact/>
        </React.Fragment>
    );
}