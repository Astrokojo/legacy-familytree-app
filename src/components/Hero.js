import React from "react";
import '../styles/hero.css';

const Hero = () => {

    const handleClick = () => { 
        console.log('Button clicked');
    }

    return (
        <div className="hero-bg">
            <div className="hero-content">
                <p>Start with a common ancestor</p>
                <h2>Build Your Family Legacy</h2>

                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    );
}

export default Hero;