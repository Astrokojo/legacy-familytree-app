import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import FamilyForm from "./components/FamilyForm";
import FamilyTree from "./components/FamilyTree";

import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        {/* <Hero /> */}

        {/* <FamilyForm /> */}
        <FamilyTree />
      </Router>

    </div>
  );
}

export default App;
