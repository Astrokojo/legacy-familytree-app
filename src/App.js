import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FormComponent from './components/Form';
import GojsDiagram from './components/TestDiagram';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import './styles/main.css';
export default function App() {
    return (
        <React.Fragment>
            <Home />
            {/* <Navbar />
            <Hero /> */}
            {/* <div className='temp-div'>
                <FormComponent />
                <GojsDiagram />

            </div> */}
            {/* <About />  */}
            {/* <Footer /> */}
        </React.Fragment>
    );
}