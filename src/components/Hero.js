import React from "react";
import '../styles/hero.css';

const Hero = () => {

    const handleClick = () => { 
        console.log('Button clicked');
    }

    return (
        <div className="hero-bg">
            <div className="hero-content">
                <h2>Build Your Family Legacy</h2>
                <p>Create and explore a detailed family tree with ease</p>

                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    );
}

export default Hero;