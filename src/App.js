import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TreeDiagram from './components/TreeDiagram'
export default function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Contact />
            <Footer />
            <TreeDiagram/>
        </React.Fragment>
    );
}