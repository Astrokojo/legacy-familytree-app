import React from "react";
const Home = () => {
    const handleClick = () => { 
        console.log('Button clicked');
    
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() =>{handleClick(console.log('Button clicked'))}}>Click me</button>
            <button>Click me again</button>
        </div>
    );
}
export default Home;