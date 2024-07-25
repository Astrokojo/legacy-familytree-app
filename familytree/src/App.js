import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FamilyTree from "./components/FamilyTree";

import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Hero />
        <FamilyTree />
              
      </Router>
<Footer />
    </div>
  );
}

export default App;
