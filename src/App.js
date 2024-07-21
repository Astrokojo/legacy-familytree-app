import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import GojsDiagram from './components/TestDiagram';
import FormComponent from './components/Form';
export default function App() {
    return (
        <React.Fragment>
            <Navbar />
            <div className='temp-div'>
            <FormComponent />
            <GojsDiagram />

            </div>
            {/* <About /> */}
            <Footer />
        </React.Fragment>
    );
}