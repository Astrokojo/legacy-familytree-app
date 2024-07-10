import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Contact />
            <Footer/>
        </React.Fragment>
    );
}